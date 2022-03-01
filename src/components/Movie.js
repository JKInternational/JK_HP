import React, { Component, Suspense, lazy } from 'react';
import YouTube from 'react-youtube';
import youtube_logo from "./imgs/youtube_logo.png";
import './Movie.css';


class Movie extends React.Component {



  render() {


    const opts = {
      height: '288',
      width: '512',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    const opts1 = {
      height: '180',
      width: '320',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return<>
    
      <div className="Movie">
        <div className="container">
          <div className="innerContainer1">
            <div className="category">
              <span>Home</span>
              <span>></span>
              <span>제품리뷰</span>
              <span>></span>
              <span>동영상리뷰</span>
            </div>
            <p><h1>동영상리뷰</h1></p>
            <div id="search">
              <form action="#">
                <select id="select">
                  <option className="select1" value="title">제목</option>
                </select>
                <input className="search1" type="search" placeholder="내용을 입력해주세요." />
                <input className="search2" type="submit"  value="검색" />
              </form>
            </div>
            <div id="line" />
          </div>
        </div>


      <div className="fix_width">
        
        <div className="container1">

          <div className="section">
            티찹 전동공구
          </div>

          <ul className="link">
            <li className="innerLink">
              <ul className="innerLink1">
                <li id="moviePadding"><YouTube id="flexMovie" videoId="o6BhMBs_htI" lazy={1} opts={opts} /></li>
                <li>
                  <ul className="link_title">
                    <li><img src={youtube_logo} width="30" height="auto" /></li>
                    <li><h4 id="hv_title1">듀얼측정기</h4></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="innerLink">          
              <ul className="innerLink1">
                <li id="moviePadding"><YouTube id="flexMovie" videoId="Ag1nHueUAM4" opts={opts} /></li>
                <li>
                  <ul className="link_title">
                    <li><img src={youtube_logo} width="30" height="auto" /></li>
                    <li><h4 id="hv_title1">18V 충전해머드릴 TID-18BL/THD-18BL</h4></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="link">
            <li className="innerLink">
              <ul className="innerLink1">
                <li id="moviePadding"><YouTube id="flexMovie" videoId="oQqUjYhr31U" opts={opts} /></li>
                <li>
                  <ul className="link_title">
                    <li><img src={youtube_logo} width="30" height="auto" /></li>
                    <li><h4 id="hv_title1">18V 충전원형톱 TCS-165BL</h4></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="innerLink">          
              <ul className="innerLink1">
                <li id="moviePadding"><YouTube id="flexMovie" videoId="9GUwWBj15Ls" opts={opts} /></li>
                <li>
                  <ul className="link_title">
                    <li><img src={youtube_logo} width="30" height="auto" /></li>
                    <li><h4 id="hv_title1">18V 충전로터리해머드릴 TRD-18BL</h4></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          
          <ul className="link">
            <li className="innerLink">
              <ul className="innerLink1">
                <li id="moviePadding"><YouTube id="flexMovie" videoId="wfZDXjgQz6s" opts={opts} /></li>
                <li>
                  <ul className="link_title">
                    <li><img src={youtube_logo} width="30" height="auto" /></li>
                    <li><h4 id="hv_title1">16V 충전전동전지가위 WCP-25</h4></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <div className="section">
            티찹 컴프레셔
          </div>

          <ul className="link">
            <li className="innerLink">
              <ul className="innerLink1">
                <li id="moviePadding"><YouTube id="flexMovie" videoId="hOta8UuaJz4" opts={opts} /></li>
                <li>
                  <ul className="link_title">
                    <li><img src={youtube_logo} width="30" height="auto" /></li>
                    <li><h4 id="hv_title1">컴프레셔 사용 설명 및 DC-990S</h4></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="innerLink">          
              <ul className="innerLink1">
              <li id="moviePadding"><YouTube id="flexMovie" videoId="kjHQ7aDdXBo" opts={opts} /></li>
                <li>
                  <ul className="link_title">
                    <li><img src={youtube_logo} width="30" height="auto" /></li>
                    <li><h4 id="hv_title1">하이브리드 유무선 컴프레셔 DC-1090</h4></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>          
          <ul className="link">
            <li className="innerLink">
              <ul className="innerLink1">
                <li id="moviePadding"><YouTube id="flexMovie" videoId="lcVIbygFcyQ" opts={opts} /></li>
                <li>
                  <ul className="link_title">
                    <li><img src={youtube_logo} width="30" height="auto" /></li>
                    <li><h4 id="hv_title1">DC-660/DC-661/DC-990X1</h4></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <div className="section">
            기타
          </div>

          <ul className="link">
            <li className="innerLink">
              <ul className="innerLink1">
                <li id="moviePadding"><YouTube id="flexMovie" videoId="sGXfLUn0ow4" opts={opts} /></li>
                <li>
                  <ul className="link_title">
                    <li><img src={youtube_logo} width="30" height="auto" /></li>
                    <li><h4 id="hv_title1">티찹 오픈라쳇(기어)렌치</h4></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="innerLink">          
              <ul className="innerLink1">
                <li id="moviePadding"><YouTube id="flexMovie" videoId="OTJO0XV6dIw" opts={opts} /></li>
                <li>
                  <ul className="link_title">
                    <li><img src={youtube_logo} width="30" height="auto" /></li>
                    <li><h4 id="hv_title1">워디툴 타일드릴비트</h4></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="link">
            <li className="innerLink">
              <ul className="innerLink1">
                <li id="moviePadding"><YouTube id="flexMovie" videoId="vkdCwT_zFo8" opts={opts} /></li>
                <li>
                  <ul className="link_title">
                    <li><img src={youtube_logo} width="30" height="auto" /></li>
                    <li><h4 id="hv_title1">클린디스크</h4></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="container2">

        <div className="section">
          티찹 전동공구
        </div>

        <ul className="link">
          <li className="innerLink">
            <ul className="innerLink1">
              <li id="moviePadding"><YouTube id="flexMovie" videoId="o6BhMBs_htI" opts={opts1} /></li>
              <li>
                <ul className="link_title">
                  <li><img src={youtube_logo} width="30" height="auto" /></li>
                  <li><h4 id="hv_title1">듀얼측정기</h4></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="innerLink">          
            <ul className="innerLink1">
              <li id="moviePadding"><YouTube id="flexMovie" videoId="Ag1nHueUAM4" opts={opts1} /></li>
              <li>
                <ul className="link_title">
                  <li><img src={youtube_logo} width="30" height="auto" /></li>
                  <li><h4 id="hv_title1">18V 충전해머드릴 TID-18BL/THD-18BL</h4></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="link">
          <li className="innerLink">
            <ul className="innerLink1">
              <li id="moviePadding"><YouTube id="flexMovie" videoId="oQqUjYhr31U" opts={opts1} /></li>
              <li>
                <ul className="link_title">
                  <li><img src={youtube_logo} width="30" height="auto" /></li>
                  <li><h4 id="hv_title1">18V 충전원형톱 TCS-165BL</h4></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="innerLink">          
            <ul className="innerLink1">
              <li id="moviePadding"><YouTube id="flexMovie" videoId="9GUwWBj15Ls" opts={opts1} /></li>
              <li>
                <ul className="link_title">
                  <li><img src={youtube_logo} width="30" height="auto" /></li>
                  <li><h4 id="hv_title1">18V 충전로터리해머드릴 TRD-18BL</h4></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="link">
          <li className="innerLink">
            <ul className="innerLink1">
              <li id="moviePadding"><YouTube id="flexMovie" videoId="wfZDXjgQz6s" opts={opts1} /></li>
              <li>
                <ul className="link_title">
                  <li><img src={youtube_logo} width="30" height="auto" /></li>
                  <li><h4 id="hv_title1">16V 충전전동전지가위 WCP-25</h4></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <div className="section">
          티찹 컴프레셔
        </div>

        <ul className="link">
          <li className="innerLink">
            <ul className="innerLink1">
              <li id="moviePadding"><YouTube id="flexMovie" videoId="hOta8UuaJz4" opts={opts1} /></li>
              <li>
                <ul className="link_title">
                  <li><img src={youtube_logo} width="30" height="auto" /></li>
                  <li><h4 id="hv_title1">컴프레셔 사용 설명 및 DC-990S</h4></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="innerLink">          
            <ul className="innerLink1">
            <li id="moviePadding"><YouTube id="flexMovie" videoId="kjHQ7aDdXBo" opts={opts1} /></li>
              <li>
                <ul className="link_title">
                  <li><img src={youtube_logo} width="30" height="auto" /></li>
                  <li><h4 id="hv_title1">하이브리드 유무선 컴프레셔 DC-1090</h4></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>          
        <ul className="link">
          <li className="innerLink">
            <ul className="innerLink1">
              <li id="moviePadding"><YouTube id="flexMovie" videoId="lcVIbygFcyQ" opts={opts1} /></li>
              <li>
                <ul className="link_title">
                  <li><img src={youtube_logo} width="30" height="auto" /></li>
                  <li><h4 id="hv_title1">DC-660/DC-661/DC-990X1</h4></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <div className="section">
          기타
        </div>

        <ul className="link">
          <li className="innerLink">
            <ul className="innerLink1">
              <li id="moviePadding"><YouTube id="flexMovie" videoId="sGXfLUn0ow4" opts={opts1} /></li>
              <li>
                <ul className="link_title">
                  <li><img src={youtube_logo} width="30" height="auto" /></li>
                  <li><h4 id="hv_title1">티찹 오픈라쳇(기어)렌치</h4></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="innerLink">          
            <ul className="innerLink1">
              <li id="moviePadding"><YouTube id="flexMovie" videoId="OTJO0XV6dIw" opts={opts1} /></li>
              <li>
                <ul className="link_title">
                  <li><img src={youtube_logo} width="30" height="auto" /></li>
                  <li><h4 id="hv_title1">워디툴 타일드릴비트</h4></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="link">
          <li className="innerLink">
            <ul className="innerLink1">
              <li id="moviePadding"><YouTube id="flexMovie" videoId="vkdCwT_zFo8" opts={opts1} /></li>
              <li>
                <ul className="link_title">
                  <li><img src={youtube_logo} width="30" height="auto" /></li>
                  <li><h4 id="hv_title1">클린디스크</h4></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>


      </div>
    
    </>;
  }
}







export default Movie;