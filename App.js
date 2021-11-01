import title_logo from './title_logo.png';
import search_btn from './search_btn.png';
import main_slide1 from './main_slide_1.jpg';
import main_slide2 from './main_slide_2.jpg';
import main_slide3 from './main_slide_3.jpg';
import main_slide4 from './main_slide_4.jpg';
import main_sample from './main_sample.jpg';
import footer_logo from './footer_logo.png';
import youtube_logo from './youtube_logo.png';
import React from 'react';
import YouTube from 'react-youtube';
import './App.css';



function App() {


    const opts = {
      height: '130',
      width: '214',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };



  return (
  <><div className="App">
      <div>
        <div className="nav">
          <div className="navbar_logo">
            <a href="http://www.naver.com"><img src={title_logo} /></a>
          </div>

          <ul className="navbar_menu">
            <li><a href=""><h4>JK인터내셔널</h4></a></li>
            <li><a href=""><h4>브랜드</h4></a></li>
            <li><a href=""><h4>제품리뷰</h4></a></li>
            <li><a href=""><h4>공지사항</h4></a></li>
            <li><a href=""><h4>고객지원</h4></a></li>
          </ul>

          <div className="navbar_search">
            <input type="text" placeholder="제품 찾기"/>
            <button><img src={search_btn} /></button>
          </div>
        </div>
      </div>


        <div className="mainBanner">
            <img srcSet={`${main_slide1} 1980w`} src={main_slide1} />
        </div>


        <div className="fix_width">
          <div className="section1">
            NEW ARRIVAL
          </div>
      
          <div>
            <ul className="container1">
              <li id="na_image1">
                <a href=""><img src={main_sample} /></a>
              </li>
              <li id="na_image2">
                <a href=""><img src={main_sample} /></a>
              </li>
              <li id="na_image3">
                <a href=""><img src={main_sample} /></a>
              </li>
              <li id="na_image4">
                <a href=""><img src={main_sample} /></a>
              </li>
            </ul>
          </div>

          <div className="section2">
            BEST ITEM
          </div>
      
          <div>
            <ul className="container2">
              <li id="bi_image1">
                <a href=""><img src={main_sample} /></a>
              </li>
              <li id="bi_image2">
                <a href=""><img src={main_sample} /></a>
              </li>
              <li id="bi_image3">
                <a href=""><img src={main_sample} /></a>
              </li>
              <li id="bi_image4">
                <a href=""><img src={main_sample} /></a>
              </li>
            </ul>
          </div>
        
          <div className="section3">
            HOT VIDEO
          </div>

          <div className="container3">
            <ul className="link1">
              <li><YouTube videoId="vkdCwT_zFo8" /></li>
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


      <div className="footer_back">
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

