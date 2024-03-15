import React from "react";
import axios from "axios";
import "./Modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalImageUrl: "", // 모달에 표시할 이미지 URL
      loading: true, // 이미지 로딩 상태
      error: null, // 에러 메시지
      showModal: false, // 모달 노출 여부
      hideModalUntil: localStorage.getItem("hideModalUntil"), // 로컬 스토리지에서 숨김 설정 가져오기
    };
  }

  componentDidMount() {
    this.fetchModalImage();
  }

  fetchModalImage = () => {
    axios
      .get("http://jkintl.co.kr:10337/api/modals?populate=*&display=true")
      .then((response) => {
        const data = response.data.data;
        console.log("Modal Data:", data); // 데이터를 콘솔에 출력하여 확인합니다.
        // 데이터가 있고 첫 번째 모달 데이터의 이미지 URL 가져오기
        if (data && data.length > 0) {
          const modalImageUrl =
            data[0]?.attributes?.content?.data?.attributes?.url; // modal content에 업로드된 이미지 데이터의 URL을 가져옵니다.

          // 가져온 데이터가 있다면 state에 설정
          if (modalImageUrl) {
            // modalImageUrl을 modalImage의 URL로 설정
            this.setState({
              modalImageUrl: `http://jkintl.co.kr:10337${modalImageUrl}`,
              loading: false,
              showModal: true, // 모달 노출 여부 설정
            });
          } else {
            // 이미지가 없는 경우 에러 처리
            this.setState({ error: "No image URL found", loading: false });
          }
        } else {
          // 데이터가 없는 경우 에러 처리
          this.setState({ error: "No data found", loading: false });
        }
      })
      .catch((error) => {
        console.error("Error fetching modal content:", error);
        // 에러가 발생한 경우 에러 메시지 설정
        this.setState({
          error: "Error fetching modal content",
          loading: false,
        });
      });
  };

  handleCloseModal = () => {
    // 모달을 닫는 핸들러
    this.setState({ showModal: false });
  };

  handleCloseToday = () => {
    // 오늘 하루 보지 않기 버튼 클릭 시, 모달을 닫고 로컬 스토리지에 설정
    this.setState({ showModal: false });
    localStorage.setItem(
      "hideModalUntil",
      new Date(new Date().setHours(24, 0, 0, 0)).getTime()
    );
  };

  render() {
    const { modalImageUrl, loading, error, showModal, hideModalUntil } =
      this.state;

    // 로딩 중이면 로딩 메시지 출력
    if (loading) {
      return <div>Loading...</div>;
    }

    // 에러가 발생한 경우 에러 메시지 출력
    if (error) {
      return <div>Error: {error}</div>;
    }

    // 오늘 하루 동안 모달을 보지 않기로 설정한 경우 모달을 노출하지 않음
    if (hideModalUntil) {
      const currentTime = new Date().getTime();
      if (currentTime < hideModalUntil) {
        return null;
      }
    }

    // 이미지가 있는 경우 모달 창에 이미지와 텍스트 출력
    return (
      <div className="modal">
        {showModal && (
          <ul className="modalContent">
            <li className="popUpImg">
              {/* 이미지가 있는 경우에만 이미지를 표시 */}
              {modalImageUrl && (
                <div>
                  <img
                    className="noticeBanner"
                    src={modalImageUrl} // 가져온 이미지 URL을 사용합니다.
                    alt="Modal Content"
                  />
                </div>
              )}
            </li>
            <li className="closeBtn">
              <button className="close" onClick={this.handleCloseModal}>
                닫기 X
              </button>

              <button className="todayClose" onClick={this.handleCloseToday}>
                오늘 하루 보지 않기
              </button>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default Modal;
