import { ReactComponent as TitleLogo } from "./imgs/title_logo.svg";
import { ReactComponent as Hamburger } from "./imgs/hamburger.svg";
import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="Navbar">
          <div className="nav">
            <div className="navbar_logo">
              <Link to="/">
                <TitleLogo width="177" height="23" />
              </Link>
            </div>

            <ul className="navbar_menu">
              <li className="navbar_menu1">
                <button className="dropdownBtn">
                  <h4>JK인터내셔널</h4>
                </button>
                <div className="dropdownContent">
                  <Link to="introduce">회사소개</Link>
                </div>
              </li>
              <li className="navbar_menu1">
                <button className="dropdownBtn">
                  <h4>브랜드</h4>
                </button>
                <div className="dropdownContent">
                  <div className="dropdownContentinner">
                    <button className="dropdownBtnAbove">티찹</button>
                    <div className="dropdownContent1">
                      <Link to="tichoppower">전동공구</Link>
                      <Link to="tichopcomp">컴프레서</Link>
                    </div>
                  </div>
                  <Link to="blueshark">블루샤크</Link>
                  <Link to="worthytool">워디툴</Link>
                  {/* <Link to="etc">기타</Link> */}
                </div>
              </li>
              <li className="navbar_menu1">
                <button className="dropdownBtn">
                  <h4>제품리뷰</h4>
                </button>
                <div className="dropdownContent">
                  <Link to="movie">동영상리뷰</Link>
                </div>
              </li>
              <li className="navbar_menu1">
                <button className="dropdownBtn">
                  <h4>공지사항</h4>
                </button>
                <div className="dropdownContent">
                  <Link to="notice">소식</Link>
                </div>
              </li>
              <li className="navbar_menu1">
                <button className="dropdownBtn">
                  <h4>고객지원</h4>
                </button>
                <div className="dropdownContent">
                  <Link to="leaflet">전단지</Link>
                  {/* <Link to="seller">대리점안내</Link> */}
                  <Link to="contact">찾아오시는길</Link>
                </div>
              </li>
            </ul>

            <div className="navbar_search">
              <form action="http://jkintl.co.kr/searchpage">
                <input type="text" name="searchword" placeholder="상품 검색" />
                {/* <Link to="searchpage"> */}
                <input type="submit" value="" id="searchBtn" />
                {/* </Link> */}
              </form>
            </div>
          </div>
          {/* 여기까지 Navbar PC화면 */}

          <div className="navSmall">
            <div className="targetHam">
              <button className="dropdownBtn1">
                <Hamburger id="hamburger" width="29" height="23" />
              </button>
              <div className="dropdownContentS">
                <div id="dcs1">
                  <p>JK인터내셔널</p>
                  <div className="dropdownContentS1">
                    <a href="/introduce">회사소개</a>
                  </div>
                </div>
                <div id="dcs2">
                  <p>브랜드</p>
                  <div className="dropdownContentS2">
                    <div id="dcs6">
                      <p className="margin">티찹</p>
                      <div className="dropdownContentS6">
                        <a href="/tichoppower">파워툴</a>
                        <a href="/tichopcomp">컴프레서</a>
                      </div>
                    </div>
                    <a href="http://www.jkintl.co.kr/blueshark">블루샤크</a>
                    <a href="http://www.jkintl.co.kr/worthytool">워디툴</a>
                    {/* <a href="etc">기타</a> */}
                  </div>
                </div>
                <div id="dcs3">
                  <p>제품리뷰</p>
                  <div className="dropdownContentS3">
                    <a href="movie">동영상리뷰</a>
                  </div>
                </div>
                <div id="dcs4">
                  <p>공지사항</p>
                  <div className="dropdownContentS4">
                    <a href="notice">소식</a>
                  </div>
                </div>
                <div id="dcs5">
                  <p>고객지원</p>
                  <div className="dropdownContentS5">
                    <a href="leaflet">전단지</a>
                    <a href="seller">대리점안내</a>
                    <a href="contact">찾아오시는길</a>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/">
              <TitleLogo className="navbar_logo_s" width="177" height="23" />
            </Link>
            <Link to="searchpage">
              <input type="submit" value="" id="searchBtn" />
            </Link>
          </div>
          {/* 여기까지 Navbar 모바일 화면 */}
        </div>
      </>
    );
  }
}

export default Navbar;
