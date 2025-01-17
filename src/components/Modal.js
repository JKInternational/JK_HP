import React from "react";
import axios from "axios";
import "./Modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false, // 드래그 상태
      startX: 0, // 드래그 시작 시 마우스 X 좌표
      startY: 0, // 드래그 시작 시 마우스 Y 좌표
      modalX: 0, // 모달 X 좌표
      modalY: 0, // 모달 Y 좌표
      wasDragging: false, // 드래그가 발생했는지 여부
    };
    this.modalRef = React.createRef();
  }

  handleMouseDown = (e) => {
    // 드래그 시작
    e.preventDefault();
    this.setState({
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      wasDragging: false, // 초기화
    });
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("mouseup", this.handleMouseUp);
  };

  handleMouseMove = (e) => {
    // 드래그 중
    if (!this.state.isDragging) return;

    const { startX, startY, modalX, modalY } = this.state;
    const deltaX = e.clientX - startX; // 마우스 이동 X 변화량
    const deltaY = e.clientY - startY; // 마우스 이동 Y 변화량

    this.setState({
      modalX: modalX + deltaX, // 모달 위치 업데이트
      modalY: modalY + deltaY,
      startX: e.clientX, // 현재 위치를 시작 위치로 업데이트
      startY: e.clientY,
      wasDragging: true, // 드래그 발생으로 설정
    });
  };

  handleMouseUp = () => {
    // 드래그 종료
    this.setState({ isDragging: false });
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseup", this.handleMouseUp);
  };

  handleRedirect = (e) => {
    // 드래그 중이었으면 링크 이동 방지
    if (this.state.wasDragging) {
      e.preventDefault();
      this.setState({ wasDragging: false }); // 드래그 상태 초기화
      return;
    }
    const { modalRedirectUrl } = this.props;
    if (modalRedirectUrl) {
      window.location.href = modalRedirectUrl;
    }
  };

  render() {
    const { modalImageUrl, closeModal, handleCloseToday } = this.props;
    const { modalX, modalY } = this.state;

    return (
      <div
        className="modal"
        ref={this.modalRef}
        style={{
          transform: `translate(${modalX}px, ${modalY}px)`,
          cursor: this.state.isDragging ? "grabbing" : "grab",
          position: "absolute",
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          this.handleMouseDown(e);
        }}
        onClick={(e) => {
          e.stopPropagation();
          this.handleRedirect(e);
        }}
      >
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
              onClick={(e) => e.stopPropagation() || closeModal()}
            >
              닫기 X
            </button>
            <button
              className="todayClose"
              onClick={(e) => e.stopPropagation() || handleCloseToday()}
            >
              오늘 하루 보지 않기
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalsData: [],
      loading: true,
      error: null,
      hiddenModals: new Set(),
    };
  }

  componentDidMount() {
    this.fetchModalsData();
  }

  fetchModalsData = () => {
    axios
      .get("http://jkintl.co.kr:10337/api/modals?populate=*")
      .then((response) => {
        const data = response.data.data;
        if (data && data.length > 0) {
          const modalsData = data
            .filter(
              (item) =>
                item?.attributes?.content?.data?.attributes?.url &&
                item?.attributes?.address &&
                item?.attributes?.display
            )
            .map((item) => ({
              modalImageUrl: `http://jkintl.co.kr:10337${item.attributes.content.data.attributes.url}`,
              modalRedirectUrl: item.attributes.address,
            }));
          this.setState({ modalsData, loading: false });
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

  closeModal = (index) => {
    this.setState((prevState) => {
      const hiddenModals = new Set(prevState.hiddenModals);
      hiddenModals.add(index);
      return { hiddenModals };
    });
  };

  handleCloseToday = (index) => {
    localStorage.setItem(
      `hideModalUntil_${index}`,
      Date.now() + 24 * 60 * 60 * 1000
    );
    this.closeModal(index);
  };

  render() {
    const { modalsData, loading, error, hiddenModals } = this.state;

    if (loading || error) {
      return null;
    }

    return (
      <div>
        {modalsData.map((modal, index) => {
          const hideModalUntil = localStorage.getItem(
            `hideModalUntil_${index}`
          );
          const currentTime = Date.now();
          const shouldShowModal =
            !hiddenModals.has(index) &&
            (!hideModalUntil || currentTime > parseInt(hideModalUntil));

          return (
            shouldShowModal && (
              <Modal
                key={index}
                modalImageUrl={modal.modalImageUrl}
                modalRedirectUrl={modal.modalRedirectUrl}
                closeModal={() => this.closeModal(index)}
                handleCloseToday={() => this.handleCloseToday(index)}
              />
            )
          );
        })}
      </div>
    );
  }
}

export default ModalContainer;
