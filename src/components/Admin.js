import React, { Component } from "react";
import CountingMachine from "./CountingMachine"; // CountingMachine 모듈 import
import "./Admin.css";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "", // 비밀번호 상태 추가
      authenticated: false, // 인증 상태 추가
    };
  }

  // 비밀번호 입력 핸들러
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  // 확인 버튼 클릭 핸들러
  handlePasswordSubmit = (event) => {
    event.preventDefault();
    const { password } = this.state;
    // 비밀번호 확인
    if (password === "0319733788a!") {
      this.setState({ authenticated: true }); // 인증 상태 업데이트
    } else {
      alert("비밀번호가 올바르지 않습니다.");
    }
  };

  render() {
    const { authenticated } = this.state;

    return (
      <div className="Admin">
        {!authenticated ? ( // 비인증 상태일 때
          <div className="passwordForm">
            <h2>비밀번호를 입력하세요</h2>
            <form onSubmit={this.handlePasswordSubmit}>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <button type="submit">확인</button>
            </form>
          </div>
        ) : (
          // 인증된 상태일 때
          <div className="adminContent">
            <div className="visitorContainer">
              <CountingMachine /> {/* CountingMachine 모듈 사용 */}
            </div>
            <div className="graphContainer">
              {/* 그래프 표시 */}
              그래프가 표시됩니다.
            </div>
            <div className="clickedListContainer">
              <h2>게시물 검색 순위</h2>
              <button>확인하기</button>
              <div className="listHeader">
                <div>순번</div>
                <div>이미지</div>
                <div>모델명</div>
                <div>검색 수</div>
              </div>
              <div className="listItem whiteBackground">
                <div>1</div>
                <div>이미지</div>
                <div>모델명</div>
                <div>검색 수</div>
              </div>
              <div className="listItem lightGrayBackground">
                <div>2</div>
                <div>이미지</div>
                <div>모델명</div>
                <div>검색 수</div>
              </div>
              {/* 클릭된 게시물의 리스트 */}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Admin;
