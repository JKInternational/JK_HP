import title_logo from './title_logo.png';
import searchBtn from './search_btn.png';
import mainSlide1 from './main_slide_1.jpg';
import mainSlide2 from './main_slide_2.jpg';
import mainSlide3 from './main_slide_3.jpg';
import mainSlide4 from './main_slide_4.jpg';
import mainEdgeUp from './mainEdgeUp.png';
import mainEdgeDown from './mainEdgeDown.png';
import ham from './hamburger.png';
import dc990s from './990s.png';
import main_1_886 from './main_1_886.png'
import footer_logo from './footer_logo.png';
import youtube_logo from './youtube_logo.png';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import YouTube from 'react-youtube';
import './App.css';





function App() {


    const opts = {
      height: '130',
      width: '214',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };


    const stuffBox = {
      float: "center",
      backgroundColor: "white",
      width: "210px",
      height: "400px",
      margin: "10px",
      padding: "40px",
    };

    const textBox = {
      float: "center",
      backgroundColor: "none",
      width: "200px",
      height: "50px",
      margin: "10px",
      padding: "10px",
    };


  return (
  <><div className="App">
      
        <div className="nav">
          <div className="navbar_logo">
            <a href="http://www.naver.com"><img src={title_logo} /></a>
          </div>

          <ul className="navbar_menu">
            <li className="navbar_menu1">
              <button className="dropdownBtn"><h4>JK인터내셔널</h4></button>
              <div className="dropdownContent">
                <a href="#">회사소개</a>
              </div>
              </li>
            <li className="navbar_menu1">
              <button className="dropdownBtn"><h4>브랜드</h4></button>
              <div className="dropdownContent">
                <a href="#">티찹</a>
                <a href="#">블루샤크</a>
                <a href="#">워디툴</a>
                <a href="#">기타</a>
              </div>
            </li>
            <li className="navbar_menu1">
              <button className="dropdownBtn"><h4>제품리뷰</h4></button>
              <div className="dropdownContent">
                <a href="#">동영상리뷰</a>
              </div>
            </li>
            <li className="navbar_menu1">
              <button className="dropdownBtn"><h4>공지사항</h4></button>
              <div className="dropdownContent">
                <a href="#"></a>
              </div>
            </li>
            <li className="navbar_menu1">
              <button className="dropdownBtn"><h4>고객지원</h4></button>
              <div className="dropdownContent">
                <a href="#">찾아오시는길</a>
              </div>
            </li>
          </ul>

          <div className="navbar_search">
            <input type="text" placeholder="제품 찾기"/>
            <button id="searchBtn"><img src={searchBtn} /></button>
          </div>
        </div>



        <div className="navSmall">
          <div className="targetHam">
          <button className="dropdownBtn1"><img className="hamburger" src={ham} /></button>
              <div className="dropdownContentS">
                <div id="dcs1">
                  <a href="#">JK인터내셔널</a>
                    <div className="dropdownContentS1">
                      <a href="#">회사소개</a>
                    </div>
                </div>
                <div id="dcs2">
                  <a href="#">브랜드</a>
                    <div className="dropdownContentS2">
                      <a href="#">티찹</a>
                      <a href="#">블루샤크</a>
                      <a href="#">워디툴</a>
                      <a href="#">기타</a>
                    </div>
                  </div>
                <div id="dcs3">
                  <a href="#">제품리뷰</a>
                    <div className="dropdownContentS3">
                      <a href="#">동영상리뷰</a>
                    </div>
                </div>
                <div id="dcs4">
                  <a href="#">공지사항</a>
                    <div className="dropdownContentS4">
                      <a href="#"></a>
                    </div>
                </div>
                <div id="dcs5">
                  <a href="#">고객지원</a>
                    <div className="dropdownContentS5">
                      <a href="#">찾아오시는길</a>
                    </div>
                </div>
              </div>
            </div>
          <img className="navbar_logo_s" src={title_logo} />
          <button id="searchBtn"><img className="search_btn_s" src={searchBtn} /></button>
        </div>




        <img srcSet={`${mainEdgeUp} 1800w`} src={mainEdgeUp} />
        <div className="mainBannerBack">
          <div className="mainBannerRect" id="mainBannerRect">
            <span><img id="mainBannerImg" srcSet={`${main_1_886} 1800w`} src={main_1_886} /></span>
            <span className="mainBannerText1">
                <p id="mainBannerText1_1">BRUSHLESS MORTORED</p>
                <p id="mainBannerText1_2">COMPRESSOR</p>
                <p id="mainBannerText1_3">DC-886</p>
            </span>
          </div>
        </div>
        <img srcSet={`${mainEdgeDown} 1800w`} src={mainEdgeDown} />
        





        <div className="fix_width">
          <div className="section1">
            NEW ARRIVAL
          </div>
      
          <div>
            <ul className="container0">
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
            </ul>
          </div>

          <div className="section2">
            BEST ITEM
          </div>
      
          <div>
            <ul className="container0">
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
            </ul>
          </div>

          <div className="section3">
            HOT VIDEO
          </div>

          <div className="container3">
            <ul className="link1">
              <li><YouTube id="flexMovie" videoId="vkdCwT_zFo8" /></li>
              <li>
                <ul className="link1_title">
                  <li><img src={youtube_logo} width="50" height="auto" /></li>
                  <li><h4 id="hv_title1">4인치 클린디스크 리뷰</h4></li>
                </ul>
              </li>
            </ul>
            <ul className="link2_3">
              <li>
                <ul className="link2">
                  <li><YouTube videoId="oQqUjYhr31U" opts={opts} /></li>
                  <li>
                    <ul className="link2_title">
                      <li><img id="yt_logo" src={youtube_logo} width="40" height="auto" /></li>
                      <li><h6>TCS-165BL 리뷰</h6></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="link3">
                  <li><YouTube videoId="tV88tMBQhFs" opts={opts} /></li>
                  <li>
                    <ul className="link2_title">
                      <li><img id="yt_logo" src={youtube_logo} width="40" height="auto" /></li>
                      <li><h6>THD/TID-18BL 리뷰</h6></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href=""><h5 id="more">+ 더보기</h5></a></li>
            </ul>
          </div>
      </div>

      <div className="footerBack">
      <div className="footer">
        <ul className="information">
          <li><h5>JK인터내셔널</h5></li>
          <li><h5>사업자 등록번호 212-26-29750</h5></li>
          <li><h5>경기도 고양시 일산동고 고봉로 658번길 61-36, 나동(성석동)</h5></li>
          <li><h5>Tel. 031-973-3788 / Fax. 031-979-3788</h5></li>
          <li><h5>E-mail. j-kinternational@naver.com</h5></li>
          <li><img src={footer_logo} /></li>
          <li><h5>Copyright ⓒ JKinternational. all right reserved.</h5></li>
        </ul>
        <div className="sitemap">
          <ul className="sitemap1">
            <li><h4>JK인터내셔널</h4></li>
            <li><a href=""><h5>회사소개</h5></a></li>
          </ul>
          <ul className="sitemap2">
            <li><h4>브랜드</h4></li>
            <li><a href=""><h5>티찹</h5></a></li>
            <li><a href=""><h5>블루샤크</h5></a></li>
            <li><a href=""><h5>워디툴</h5></a></li>
          </ul>
          <ul className="sitemap3">
            <li><h4>제품리뷰</h4></li>
            <li><a href=""><h5>동영상 리뷰</h5></a></li>
          </ul>
          <ul className="sitemap4">
            <li><h4>공지사항</h4></li>
            <li><a href=""><h5>이벤트</h5></a></li>
          </ul>
          <ul className="sitemap5">
            <li><h4>고객지원</h4></li>
            <li><a href=""><h5>자주하는 질문</h5></a></li>
            <li><a href=""><h5>문의하기</h5></a></li>
            <li><a href=""><h5>제품메뉴얼</h5></a></li>
            <li><a href=""><h5>안전작업</h5></a></li>
          </ul>
        </div>
      </div>
      </div>



    </div>



    <script>


    </script>

  </>
  );
  
}

export default App;