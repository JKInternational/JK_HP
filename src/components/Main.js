import bannerCablecutter from "./imgs/cablecutter.jpg";
import bannerDC9913 from "./imgs/bannerDC9913.jpg";
import bannerTichop from "./imgs/bannerTichop.jpg";
import bannerTichopComp from "./imgs/bannerTichopComp1.jpg";
import bannerBlueshark from "./imgs/bannerBlueshark1.jpg";
import bannerWorthytool from "./imgs/bannerWorthytool1.jpg";
import bannerCablecutterMobile from "./imgs/cablecutterMobile.jpg";
import bannerDC9913Mobile from "./imgs/bannerDC9913Mobile.jpg";
import bannerTichopMobile from "./imgs/bannerTichopMobile.jpg";
import bannerTichopCompMobile from "./imgs/bannerTichopCompMobile1.jpg";
import bannerBluesharkMobile from "./imgs/bannerBluesharkMobile1.jpg";
import bannerWorthytoolMobile from "./imgs/bannerWorthytoolMobile1.jpg";
// import noticeBanner from "./imgs/noticeBanner.jpg";
import { ReactComponent as Arrow } from "./imgs/arrow.svg";
import youtube_logo from "./imgs/youtube_logo.png";

import React from "react";
import YouTube from "react-youtube";
import "./Main.css";
import { Link } from "react-router-dom";
import Carousel, { CarouselItem } from "./Carousel";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "./hideScrollbar.css";
import axios from "axios";

class Main extends React.Component {
  state = {
    newArrival: {},
    bestItem: {},
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "http://jkintl.co.kr:10337/api/items/?_limit=-1&populate=*&filters[newArrival]=1&sort[0]=newArrivalOrder:desc"
      );
      /* 통신이 잘 됐고, 그 결과가 있고, 그 결과에 strapi 에서 주는 data 가 있고, 그 data가 array인경우 (array는 map이라는 함수가 있음) */
      if (
        response &&
        response.data &&
        response.data.data &&
        response.data.data.map
      ) {
        var grouped = []; //2개씩 묶은것을 넣을 array
        var each = []; //2개씩 묶을 array
        // response.data.data = [item, item, item, item]
        for (var i = 0; i < response.data.data.length; ++i) {
          //현재 index를 2로 나누어 나머지가 0인경우
          //즉 0, 2, 4, 6, ...짝수.
          if (i % 2 == 0) {
            //each라는 array = [ 현재 index의 item ]
            //즉, 현재의 item 1개만 담긴 새로운 array를 만든다.
            each = [response.data.data[i]];
            //홀수번재 차례
          } else {
            // 홀수번 차례가 되면 each라는 array에 현재 index의 item 을 넣는다.
            // 그러면 당연히 [ 짝수번째, 홀수번째 ] 이렇게 될거고
            each.push(response.data.data[i]);
            // [ 작수번쨰, 홀수번째 ] 이 array를 grouped라는 array에 넣는다.
            grouped.push(each);
            // 2개씩 나누어 담을 array 초기화.
            each = [];
          }
        }
        // 만약 new arraival 이 짝수개가 아니고 홀수개인경우,
        // 마지막것은 grouped에 들어가지 못했다. 따라서 each array가 초기화되지 않은 상태로 끝났다면 (즉, 1개만 있는 상태로 끝났다면)
        // grouped에 넣는다.
        if (each.length > 0) {
          grouped.push(each);
        }
        // response.data.data을 과거 [item, item, item, item]가 아닌
        // [[item, item], [item,item]] array로 바꾸어준다.
        response.data.data = grouped;
        // 사실 여기서 newArraival 에 그냥 넣어도 되지만 데이터의 원본 형태를 지키기 위해서 response.data.data에 grouped를 넣었음.
      }
      this.setState({ newArrival: response });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const response = await axios.get(
        "http://jkintl.co.kr:10337/api/items/?_limit=-1&populate=*&filters[bestItem]=1&sort[0]=bestItemOrder:desc"
      );

      if (
        response &&
        response.data &&
        response.data.data &&
        response.data.data.map
      ) {
        var grouped = [];
        var each = [];
        for (var i = 0; i < response.data.data.length; ++i) {
          if (i % 2 == 0) {
            each = [response.data.data[i]];
          } else {
            each.push(response.data.data[i]);
            grouped.push(each);
            each = [];
          }
        }
        if (each.length > 0) {
          grouped.push(each);
        }
        response.data.data = grouped;
      }
      this.setState({ bestItem: response });
    } catch (error) {
      this.setState({ error });
    }
  };
  /*
    componentDidMount() {
        this is function that intended to run after dom is rendred,
        but in practically, it is executed duing dom is rendering.
        do not use this function to add eventhandler.
    }
    */

  render() {
    const opt = {
      height: "222.75",
      width: "396",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    const opts = {
      height: "130",
      width: "214",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    const opts1 = {
      height: "104.0625",
      width: "185",
      playerVars: {
        autoplay: 0,
      },
    };

    const opts2 = {
      height: "95.625",
      width: "170",
      playerVars: {
        autoplay: 0,
      },
    };

    const stuffBox = {
      float: "center",
      backgroundColor: "white",
      width: "200px",
      height: "400px",
      margin: "10px",
      padding: "40px",
    };

    const textBox = {
      float: "center",
      backgroundColor: "none",
      width: "200px",
      height: "50px",
      margin: "0px",
      padding: "0px",
    };

    // if (this.state.newArrival.data) {
    //   console.log(this.state.newArrival.data.data);
    // }

    return (
      <>
        <div className="Main">
          {/* <div className="pop">
            <img className="modal" src={noticeBanner} />
            <div className="closeModal">
              <button className="modalBtn"></button>
            </div>
          </div> */}

          <div className="carouselContainer">
            <Carousel>
              <Link to="/detail/102">
                <CarouselItem>
                  <img className="bannerImg" src={bannerCablecutter} />
                </CarouselItem>
              </Link>
              <Link to="/detail/99">
                <CarouselItem>
                  <img className="bannerImg" src={bannerDC9913} />
                </CarouselItem>
              </Link>
              <Link to="/tichoppower">
                <CarouselItem>
                  <img className="bannerImg" src={bannerTichop} />
                </CarouselItem>
              </Link>
              <Link to="/tichopcomp">
                <CarouselItem>
                  <img className="bannerImg" src={bannerTichopComp} />
                </CarouselItem>
              </Link>
              <Link to="/blueshark">
                <CarouselItem>
                  <img className="bannerImg" src={bannerBlueshark} />
                </CarouselItem>
              </Link>
              <Link to="/worthytool">
                <CarouselItem>
                  <img className="bannerImg" src={bannerWorthytool} />
                </CarouselItem>
              </Link>
            </Carousel>
          </div>

          <div className="carouselContainerMobile">
            <Carousel>
              <Link to="/detail/102">
                <CarouselItem>
                  <img className="bannerImg" src={bannerCablecutterMobile} />
                </CarouselItem>
              </Link>
              <Link to="/detail/99">
                <CarouselItem>
                  <img className="bannerImg" src={bannerDC9913Mobile} />
                </CarouselItem>
              </Link>
              <Link to="/tichoppower">
                <CarouselItem>
                  <img className="bannerImg" src={bannerTichopMobile} />
                </CarouselItem>
              </Link>
              <Link to="/tichopcomp">
                <CarouselItem>
                  <img className="bannerImg" src={bannerTichopCompMobile} />
                </CarouselItem>
              </Link>
              <Link to="/blueshark">
                <CarouselItem>
                  <img className="bannerImg" src={bannerBluesharkMobile} />
                </CarouselItem>
              </Link>
              <Link to="/worthytool">
                <CarouselItem>
                  <img className="bannerImg" src={bannerWorthytoolMobile} />
                </CarouselItem>
              </Link>
            </Carousel>
          </div>

          <div className="fix_width">
            <div className="deskTop">
              <div className="section1">NEW ARRIVAL</div>
              <div className="stuffgroup">
                {/*
                예전에 데이터가 담긴 array : [item0, item1, item2, item3]
                예전 map함수는 각각을 <ul class=container0></ul>로 만들어 총 4개의 <ul></ul>을 만든다.
                하지만 이제 우리의 array는 이렇게 생겼다.
                [[item0, item1], [item2, item3]]
                이제 가장 밖의 [] 기준으로 map을 돌게되면, 첫번째에서는 [item0, item1]이 나오고,
                그 다음번에서는 [item2, item3]이 나온다.
                
                그러면 가장 밖의 []기준에서 map을 돌고, 그 안에서 2개씩 담긴 array기준으로 map을 돌면서 item0, item1 혹은 item2, item3을 <ul></ul>로 출력할 수 있게 된다.
                따라서 가장 밖의 []에서는 2개의 <ul></ul>을 담기 위한 div를 하나 만들고 (<div class="stuffPairGroup"></div>) 저렇게 만든 <div> 안에 2개의 <ul></ul>을 출력해서
                <ul></ul> 을 짝지어서 1개의 <div>로 묶을 수 있게 된다.
                stuffPairGrup은 css에서 확인해보면 warp이 걸려있어서 스크롤이 줄어들면 stuffPairGroup이 일단 덩어리로 밑으로 내려가고
                더 줄어들면 <ul></ul> 이 쪼개져서 밑으로 내려간다.
                굳. b
            
              */}
                {this.state.newArrival.data &&
                this.state.newArrival.data.data.map
                  ? this.state.newArrival.data.data.map((pairItem) => {
                      return (
                        <div class="stuffPairGroup">
                          {pairItem.map((singleItem) => {
                            return (
                              <ul className="container0">
                                <Link
                                  to={"/detail/" + singleItem.id}
                                  className="stuffBoxSwitch"
                                  href=""
                                >
                                  <li id="stuffBox" style={stuffBox}>
                                    <p>
                                      <img
                                        className="stuffBoxImg"
                                        src={
                                          "http://jkintl.co.kr:10337" +
                                          singleItem.attributes.indexImage.data
                                            .attributes.url
                                        }
                                      />
                                    </p>
                                    <p id="stuffName">
                                      {singleItem.attributes.name}
                                    </p>
                                    <p id="stuffSpec" style={textBox}>
                                      {singleItem.attributes.mainDescription}
                                    </p>
                                  </li>
                                </Link>
                              </ul>
                            );
                          })}
                        </div>
                      );
                    })
                  : ""}
              </div>

              {/* <ul className="container0">
              <Link to="detail/2" className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img className="stuffBoxImg" src={tsd16bl} /></p>
                  <p id="stuffName">TSD-16BL</p>
                  <p id="stuffSpec" style={textBox}>스크류드라이버 / 16V / 2.0Ah / 2단 속도</p>
                </li>
              </Link>
            </ul> */}

              <div className="section2">BEST ITEM</div>
              <div className="stuffgroup">
                {this.state.bestItem.data && this.state.bestItem.data.data.map
                  ? this.state.bestItem.data.data.map((pariItem) => {
                      return (
                        <div class="stuffPairGroup">
                          {pariItem.map((singleItem) => {
                            return (
                              <ul className="container0">
                                <Link
                                  to={"/detail/" + singleItem.id}
                                  className="stuffBoxSwitch"
                                  href=""
                                >
                                  <li id="stuffBox" style={stuffBox}>
                                    <p>
                                      <img
                                        className="stuffBoxImg"
                                        src={
                                          "http://jkintl.co.kr:10337" +
                                          singleItem.attributes.indexImage.data
                                            .attributes.url
                                        }
                                      />
                                    </p>
                                    <p id="stuffName">
                                      {singleItem.attributes.name}
                                    </p>
                                    <p id="stuffSpec" style={textBox}>
                                      {singleItem.attributes.mainDescription}
                                    </p>
                                  </li>
                                </Link>
                              </ul>
                            );
                          })}
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>

            <div className="mobileDevices">
              <div className="section1">NEW ARRIVAL</div>
              <div className="scrollArrow">
                <div id="arrow">
                  <Arrow width="40" height="40" />
                </div>
                <ScrollMenu>
                  <div className="stuffgroup">
                    {this.state.newArrival.data &&
                    this.state.newArrival.data.data.map
                      ? this.state.newArrival.data.data.map((pairItem) => {
                          return (
                            <div class="stuffPairGroup">
                              {pairItem.map((singleItem) => {
                                return (
                                  <ul className="container0">
                                    <Link
                                      to={"/detail/" + singleItem.id}
                                      className="stuffBoxSwitch"
                                      href=""
                                    >
                                      <li id="stuffBox" style={stuffBox}>
                                        <p>
                                          <img
                                            className="stuffBoxImg"
                                            src={
                                              "http://jkintl.co.kr:10337" +
                                              singleItem.attributes.indexImage
                                                .data.attributes.url
                                            }
                                          />
                                        </p>
                                        <p id="stuffName">
                                          {singleItem.attributes.name}
                                        </p>
                                        <p id="stuffSpec" style={textBox}>
                                          {
                                            singleItem.attributes
                                              .mainDescription
                                          }
                                        </p>
                                      </li>
                                    </Link>
                                  </ul>
                                );
                              })}
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </ScrollMenu>
              </div>

              <div className="section2">BEST ITEM</div>
              <div className="scrollArrow">
                <div id="arrow">
                  <Arrow width="40" height="40" />
                </div>
                <ScrollMenu>
                  <div className="stuffgroup">
                    {this.state.bestItem.data &&
                    this.state.bestItem.data.data.map
                      ? this.state.bestItem.data.data.map((pariItem) => {
                          return (
                            <div class="stuffPairGroup">
                              {pariItem.map((singleItem) => {
                                return (
                                  <ul className="container0">
                                    <Link
                                      to={"/detail/" + singleItem.id}
                                      className="stuffBoxSwitch"
                                      href=""
                                    >
                                      <li id="stuffBox" style={stuffBox}>
                                        <p>
                                          <img
                                            className="stuffBoxImg"
                                            src={
                                              "http://jkintl.co.kr:10337" +
                                              singleItem.attributes.indexImage
                                                .data.attributes.url
                                            }
                                          />
                                        </p>
                                        <p id="stuffName">
                                          {singleItem.attributes.name}
                                        </p>
                                        <p id="stuffSpec" style={textBox}>
                                          {
                                            singleItem.attributes
                                              .mainDescription
                                          }
                                        </p>
                                      </li>
                                    </Link>
                                  </ul>
                                );
                              })}
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </ScrollMenu>
              </div>
            </div>

            <div className="section3">HOT VIDEO</div>

            <div className="container3">
              <ul className="link1">
                <li>
                  <YouTube id="flexMovie" videoId="yPGMF9tE1dE" />
                </li>
                <li>
                  <YouTube id="flexMovie1" videoId="yPGMF9tE1dE" opts={opt} />
                </li>
                <li>
                  <ul className="link1_title">
                    <li>
                      <img src={youtube_logo} width="50" height="auto" />
                    </li>
                    <li>
                      <h4 id="hv_title1">1030/1050/135B</h4>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="link2_3">
                <li>
                  <ul className="link2">
                    <li>
                      <YouTube
                        className="flexMovieSmall"
                        videoId="kgUKm6c_rwI"
                        opts={opts}
                      />
                      <YouTube
                        className="flexMovieSmall1"
                        videoId="kgUKm6c_rwI"
                        opts={opts1}
                      />
                      <YouTube
                        className="flexMovieSmall2"
                        videoId="kgUKm6c_rwI"
                        opts={opts2}
                      />
                    </li>
                    <li>
                      <ul className="link2_title">
                        <li>
                          <img
                            id="yt_logo"
                            src={youtube_logo}
                            width="40"
                            height="auto"
                          />
                        </li>
                        <li>
                          <h6>DC-9913</h6>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="link3">
                    <li>
                      <YouTube
                        className="flexMovieSmall"
                        videoId="3ba8BMIh1xo"
                        opts={opts}
                      />
                      <YouTube
                        className="flexMovieSmall1"
                        videoId="3ba8BMIh1xo"
                        opts={opts1}
                      />
                      <YouTube
                        className="flexMovieSmall2"
                        videoId="3ba8BMIh1xo"
                        opts={opts2}
                      />
                    </li>
                    <li>
                      <ul className="link2_title">
                        <li>
                          <img
                            id="yt_logo"
                            src={youtube_logo}
                            width="40"
                            height="auto"
                          />
                        </li>
                        <li>
                          <h6>TPS-140BL-B</h6>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <h5 id="more">
                    <Link to="movie">+ 더보기</Link>
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
