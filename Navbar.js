import title_logo from "./imgs/title_logo.png";
import searchBtn from "./imgs/search_btn.png";
import ham from "./imgs/hamburger.png";
import React from 'react';
import './Main.css';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {

render() {


    return <>

    <div className="Navbar">
    
      <div className="nav">
        <div className="navbar_logo">
          <Link to="/"><img src={title_logo} /></Link>
        </div>

        <ul className="navbar_menu">
          <li className="navbar_menu1">
            <button className="dropdownBtn"><h4>JK인터내셔널</h4></button>
            <div className="dropdownContent">
              <Link to="/introduce">회사소개</Link>
            </div>
            </li>
          <li className="navbar_menu1">
            <button className="dropdownBtn"><h4>브랜드</h4></button>
            <div className="dropdownContent">
              <Link to="tichop">티찹</Link>
              <Link to="blueshark">블루샤크</Link>
              <Link to="worthytool">워디툴</Link>
              <Link to="etc">기타</Link>
            </div>
          </li>
          <li className="navbar_menu1">
            <button className="dropdownBtn"><h4>제품리뷰</h4></button>
            <div className="dropdownContent">
              <Link to="movie">동영상리뷰</Link>
            </div>
          </li>
          <li className="navbar_menu1">
            <button className="dropdownBtn"><h4>공지사항</h4></button>
            <div className="dropdownContent">
              <Link to="notice">알림</Link>
            </div>
          </li>
          <li className="navbar_menu1">
            <button className="dropdownBtn"><h4>고객지원</h4></button>
            <div className="dropdownContent">
              <Link to="contact">찾아오시는길</Link>
            </div>
          </li>
        </ul>

        <div className="navbar_search">
          <input type="text" placeholder="제품 찾기"/>
          <button id="searchBtn"><img src={searchBtn} /></button>
        </div>
      </div>
      {/* 여기까지 Navbar PC화면 */}

      <div className="navSmall">
        <div className="targetHam">
        <button className="dropdownBtn1"><img className="hamburger" src={ham} /></button>
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
                    <a href="tichop">티찹</a>
                    <a href="blueshark">블루샤크</a>
                    <a href="worthytool">워디툴</a>
                    <a href="etc">기타</a>
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
                    <a href="notice">알림</a>
                  </div>
              </div>
              <div id="dcs5">
                <p>고객지원</p>
                  <div className="dropdownContentS5">
                    <a href="contact">찾아오시는길</a>
                  </div>
              </div>
            </div>
          </div>
        <img className="navbar_logo_s" src={title_logo} />
        <button id="searchBtn"><img className="search_btn_s" src={searchBtn} /></button>
      </div>
      {/* 여기까지 Navbar 모바일 화면 */}
    </div>
  </>
  };
  
}

export default Navbar;
