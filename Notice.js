import React from 'react';
import './Notice.css';


class Notice extends React.Component {


  constructor(props) {
    super(props);
    this.showHiddenBlock = this.showHiddenBlock.bind(this);
    console.log(props);
  }

  showHiddenBlock(targetId) {
    let block = document.querySelector(targetId)
    if(!block) {
      return;
    }
    var currentState = block.getAttribute("style", "display") || "display: none"
    if(currentState.indexOf("block") >= 0) {
      block.setAttribute("style", "display: none")
    } else {
      block.setAttribute("style", "display: block")
    }
  }


  render() {


    return<>
    
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
            <p><h1>소식</h1></p>
            <div id="search">
              <form action="#">
                <select id="select">
                  <option className="select1" value="title">제목</option>
                  <option className="select2" value="content">내용</option>
                </select>
                <input className="search1" type="search" placeholder="내용을 입력해주세요." />
                <input className="search2" type="submit"  value="검색" />
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
            <li id="click">조회수</li>
          </ul>
          <div id="line1" />
          <ul className="boardContent">
            <li id="no">1</li>
            <ul className="boardContent1">
              <li id="title"><button id="boardBtn" type="button" onClick={() => this.showHiddenBlock("#content1")}>홈페이지 오픈 예정</button></li>
              <li id="content1">
                제가 이번에 정말 정말 열심히 노력해서 회사 홈페이지를 제작하고 있습니다.
                비록 많은 시간이 소요되겠지만 그래도 기다려주시면 기대에 미치지는 못 하더라도
                당사의 제품을 잘 소개할 수 있는 멋진 홈페이지가 될 수 있도록 노력하겠습니다. 감사합니다.
              </li>
            </ul>
            <li id="date">2021.12.01</li>
            <li id="click">1</li>
          </ul>
          <div id="line1" />
          <ul className="boardContent">
            <li id="no">2</li>
            <ul className="boardContent1">
              <li id="title"><button id="boardBtn" type="button" onClick={() => this.showHiddenBlock("#content2")}>오픈할 줄 알았지?</button></li>
              <li id="content2">
                하겠냐?
              </li>
            </ul>
            <li id="date">2021.12.30</li>
            <li id="click">100</li>
          </ul>






        </div>    



      </div>
    
    </>;
  }
}







export default Notice;