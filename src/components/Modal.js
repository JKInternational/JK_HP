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
      showModal: false, // 모달 표시 여부
    };
  }

  componentDidMount() {
    this.fetchModalImage();
  }

  fetchModalImage = () => {
    axios
      .get("http://jkintl.co.kr:10337/api/modals?populate=*")
      .then((response) => {
        const data = response.data.data;
        if (data && data.length > 0) {
          const modalImageUrl =
            data[0]?.attributes?.content?.data?.attributes?.url;
          const displayModal = data[0]?.attributes?.display || false;
          if (modalImageUrl && displayModal) {
            this.setState({
              modalImageUrl: `http://jkintl.co.kr:10337${modalImageUrl}`,
              loading: false,
              showModal: true,
            });
          } else {
            this.setState({
              error: "No image URL found or display is false",
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

  handleClose = () => {
    localStorage.removeItem("hideModalUntil"); // hideModalUntil 값을 제거하여 모달이 다시 표시되도록 함
    this.closeModal();
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

    if (!shouldShowModal || !modalImageUrl || loading || error) {
      return null;
    }

    return (
      <div className="modal">
        <ul className="modalContent">
          <li className="popUpImg">
            <img
              className="noticeBanner"
              src={modalImageUrl}
              alt="Modal Content"
            />
          </li>
          <li className="closeBtn">
            <button className="close" onClick={this.handleClose}>
              닫기 X
            </button>
            <button className="todayClose" onClick={this.handleCloseToday}>
              오늘 하루 보지 않기
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Modal;
