import React from "react";
import axios from "axios";
import "./Notice.css";

class Notice extends React.Component {
  constructor(props) {
    super(props);
    this.showHiddenBlock = this.showHiddenBlock.bind(this);
    // console.log(props);
  }

  showHiddenBlock(targetId) {
    let block = document.querySelector(targetId);
    if (!block) {
      return;
    }
    var currentState =
      block.getAttribute("style", "display") || "display: none";
    if (currentState.indexOf("block") >= 0) {
      block.setAttribute("style", "display: none");
    } else {
      block.setAttribute("style", "display: block");
    }
  }

  state = {
    notice: {},
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/notices?sort[0]=no:desc"
      );
      this.setState({ notice: response });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    return (
      <>
        <div className="Notice">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>공지사항</span>
                <span>></span>
                <span>소식</span>
              </div>
              <p>
                <h1>소식</h1>
              </p>
              <div id="search">
                <form action="#">
                  <select id="select">
                    <option className="select1" value="title">
                      제목
                    </option>
                    <option className="select2" value="content">
                      내용
                    </option>
                  </select>
                  <input
                    className="search1"
                    type="search"
                    placeholder="내용을 입력해주세요."
                  />
                  <input className="search2" type="submit" value="검색" />
                </form>
              </div>
              <div id="line" />
            </div>
          </div>

          <div className="boardContainer">
            <ul className="boardTitle">
              <li id="no">글번호</li>
              <li id="title">글제목</li>
              <li id="date">날짜</li>
            </ul>

            {this.state.notice.data &&
            this.state.notice.data.data &&
            this.state.notice.data.data.map
              ? this.state.notice.data.data.map(item => {
                  return (
                    <>
                      <div id="line1" />
                      <ul className="boardContent">
                        <li id="no">{item.attributes.no}</li>
                        <ul className="boardContent1">
                          <li id="title">
                            <button
                              id="boardBtn"
                              type="button"
                              onClick={() =>
                                this.showHiddenBlock("#content" + item.id)
                              }
                            >
                              {item.attributes.title}
                            </button>
                          </li>
                          <li className="content" id={"content" + item.id}>
                            {item.attributes.content}
                          </li>
                        </ul>
                        <li id="date">
                          {item.attributes.createdAt.split("T")[0]}
                        </li>
                      </ul>
                    </>
                  );
                })
              : ""}
          </div>
        </div>
      </>
    );
  }
}

export default Notice;
