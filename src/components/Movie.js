import React, { Component, Suspense, lazy } from "react";
import YouTube from "react-youtube";
import youtube_logo from "./imgs/youtube_logo.png";
import "./Movie.css";

class Movie extends React.Component {
  render() {
    const movieOpts = {
      height: "288",
      width: "512",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    const movieOpts1 = {
      height: "180",
      width: "320",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <>
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
              <p>
                <h1>동영상리뷰</h1>
              </p>
              {/* <div id="search">
              <form action="#">
                <select id="select">
                  <option className="select1" value="title">제목</option>
                </select>
                <input className="search1" type="search" placeholder="내용을 입력해주세요." />
                <input className="search2" type="submit"  value="검색" />
              </form>
            </div> */}
              <div id="line" />
            </div>
          </div>

          <div className="fix_width">
            <div className="container1">
              <div className="section">티찹 전동공구</div>

              <ul className="link">
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="W2nAzp3QH_0"
                        lazy={1}
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">9in1 멀티측정기 TDM-MAX</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="XLBmQWTX26Y"
                        lazy={1}
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">
                            DC36V 충전대포송풍기 TCB-36BL-B
                          </h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="AAC9tmjfENY"
                        lazy={1}
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">DC36V 충전체인톱 TES-36BL-B</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="3ba8BMIh1xo"
                        lazy={1}
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">DC18V 충전플런지쏘 TPS-140BL-B</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="yPGMF9tE1dE"
                        lazy={1}
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">다용도절단기(케이블커터)</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="kgUKm6c_rwI"
                        lazy={1}
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">
                            AC220V(다목적)금속절단기 DC-9913
                          </h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="NUYCpm8EPd8"
                        lazy={1}
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">
                            DC36V (다목적)금속절단기 DC-9914
                          </h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="FySwQHVTXxE"
                        lazy={1}
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">DC18V 충전직쏘 TJS-18-B</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="fBMWUUYX6qE"
                        lazy={1}
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">
                            DC36V (다목적)금속절단기 DC-9915
                          </h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="o6BhMBs_htI"
                        lazy={1}
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">듀얼측정기</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="Ag1nHueUAM4"
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">
                            DC18V 충전해머드릴 TID-18BL/THD-18BL
                          </h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="oQqUjYhr31U"
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">DC18V 충전원형톱 TCS-165BL</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="9GUwWBj15Ls"
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">
                            DC18V 충전로터리해머드릴 TRD-18BL
                          </h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="wfZDXjgQz6s"
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">DC16V 충전전동전지가위 WCP-25</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="section">티찹 컴프레셔</div>

              <ul className="link">
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="lrwFe2CfIqA"
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">DC-3090</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="vW7_2w1lO-c"
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">DC-1090M</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="hOta8UuaJz4"
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">컴프레셔 사용 설명 및 DC-990S</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="kjHQ7aDdXBo"
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">
                            하이브리드 유무선 컴프레셔 DC-1090
                          </h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="lcVIbygFcyQ"
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">DC-660/DC-661/DC-990X1</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="section">기타</div>

              <ul className="link">
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="sGXfLUn0ow4"
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">티찹 오픈라쳇(기어)렌치</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="OTJO0XV6dIw"
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">워디툴 타일드릴비트</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="link">
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="vkdCwT_zFo8"
                        opts={movieOpts}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">클린디스크</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="container2">
              <div className="section">티찹 전동공구</div>

              <ul className="link">
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="kgUKm6c_rwI"
                        lazy={1}
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">(다목적)금속절단기 DC-9913</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="FySwQHVTXxE"
                        lazy={1}
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">18V 충전직쏘 TJS-18-B</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="fBMWUUYX6qE"
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">(다목적)금속절단기 DC-9915</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="o6BhMBs_htI"
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">듀얼측정기</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="Ag1nHueUAM4"
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">
                            18V 충전해머드릴 TID-18BL/THD-18BL
                          </h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="link">
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="oQqUjYhr31U"
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">18V 충전원형톱 TCS-165BL</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="9GUwWBj15Ls"
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">
                            18V 충전로터리해머드릴 TRD-18BL
                          </h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="link">
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="wfZDXjgQz6s"
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">16V 충전전동전지가위 WCP-25</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="section">티찹 컴프레셔</div>

              <ul className="link">
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="hOta8UuaJz4"
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">컴프레셔 사용 설명 및 DC-990S</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="kjHQ7aDdXBo"
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">
                            하이브리드 유무선 컴프레셔 DC-1090
                          </h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="link">
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="lcVIbygFcyQ"
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">DC-660/DC-661/DC-990X1</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="section">기타</div>

              <ul className="link">
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="sGXfLUn0ow4"
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">티찹 오픈라쳇(기어)렌치</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="OTJO0XV6dIw"
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">워디툴 타일드릴비트</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="link">
                <li className="innerLink">
                  <ul className="innerLink1">
                    <li id="moviePadding">
                      <YouTube
                        id="flexMovieReview"
                        videoId="vkdCwT_zFo8"
                        opts={movieOpts1}
                      />
                    </li>
                    <li>
                      <ul className="link_title">
                        <li>
                          <img src={youtube_logo} width="30" height="auto" />
                        </li>
                        <li>
                          <h4 id="hv_title1">클린디스크</h4>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Movie;
