import React from "react";
import axios from "axios";
import "./Modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalImageUrl: "", // 모달에 표시할 이미지 URL
      modalRedirectUrl: "", // 클릭 시 이동할 페이지 URL
      loading: true, // 이미지 로딩 상태
      error: null, // 에러 메시지
      showModal: false, // 모달 표시 여부
    };
  }

  componentDidMount() {
    this.fetchModalContent();
  }

  fetchModalContent = () => {
    axios
      .get("http://jkintl.co.kr:10337/api/modals?populate=*")
      .then((response) => {
        const data = response.data.data;
        if (data && data.length > 0) {
          const modalImageUrl =
            data[0]?.attributes?.content?.data?.attributes?.url;
          const modalRedirectUrl = data[0]?.attributes?.address;
          const displayModal = data[0]?.attributes?.display || false;
          if (modalImageUrl && modalRedirectUrl && displayModal) {
            this.setState({
              modalImageUrl: `http://jkintl.co.kr:10337${modalImageUrl}`,
              modalRedirectUrl,
              loading: false,
              showModal: true,
            });
          } else {
            this.setState({
              error: "No image URL or redirect URL found, or display is false",
              loading: false,
            });
          }
        } else {
          this.setState({ error: "No data found", loading: false });
        }
      })
      .catch((error) => {
        console.error("Error fetching modal content:", error);
        this.setState({
          error: "Error fetching modal content",
          loading: false,
        });
      });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleCloseToday = () => {
    localStorage.setItem("hideModalUntil", Date.now() + 24 * 60 * 60 * 1000); // 현재 시간으로부터 24시간 뒤의 시간을 저장
    this.closeModal();
  };

  handleRedirect = () => {
    const { modalRedirectUrl } = this.state;
    if (modalRedirectUrl) {
      window.location.href = modalRedirectUrl; // 특정 페이지로 이동
    }
  };

  render() {
    const { modalImageUrl, loading, error, showModal } = this.state;

    // 현재 시간
    const currentTime = Date.now();
    // 로컬 스토리지에서 저장된 시간 가져오기
    const hideModalUntil = localStorage.getItem("hideModalUntil");
    // 모달을 보여줘야 하는지 여부 확인
    const shouldShowModal =
      showModal && (!hideModalUntil || currentTime > parseInt(hideModalUntil));

    if (!shouldShowModal || loading || error) {
      return null;
    }

    return (
      <div className="modal" onClick={this.handleRedirect}>
        <ul className="modalContent">
          <li className="popUpImg">
            <img
              className="noticeBanner"
              src={modalImageUrl}
              alt="Modal Content"
            />
          </li>
          <li className="closeBtn">
            <button
              className="close"
              onClick={(e) => e.stopPropagation() || this.closeModal()}
            >
              닫기 X
            </button>
            <button
              className="todayClose"
              onClick={(e) => e.stopPropagation() || this.handleCloseToday()}
            >
              오늘 하루 보지 않기
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Modal;
