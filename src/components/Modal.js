import React from "react";
import noticePopUp from "./imgs/noticePopUp.jpg";
import "./Modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      showToday: true,
    };
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleCloseToday = () => {
    this.setState({ showToday: false });
    localStorage.setItem(
      "hideModalUntil",
      new Date(new Date().setHours(24, 0, 0, 0)).getTime()
    );
  };

  render() {
    const { showModal, showToday } = this.state;

    const hideModalUntil = localStorage.getItem("hideModalUntil");
    const hideModalTime = hideModalUntil ? parseInt(hideModalUntil, 10) : 0;
    const currentTime = new Date().getTime();
    const shouldShowModal = !hideModalTime || currentTime > hideModalTime;

    if (!shouldShowModal || !showModal) return null;

    return (
      <div className="modal">
        <div className="modalContent">
          {/* <span className="close" onClick={this.closeModal}>
            &times;
          </span> */}
          <div className="popUpImg">
            <img className="noticeBanner" src={noticePopUp} />
          </div>
          <div className="closeBtn">
            <button className="close" onClick={this.closeModal}>
              닫기 X
            </button>
            {showToday && (
              <button className="todayClose" onClick={this.handleCloseToday}>
                오늘 하루 보지 않기
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
