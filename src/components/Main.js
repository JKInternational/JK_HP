import { ReactComponent as Arrow } from "./imgs/arrow.svg";
import gear1 from "./imgs/gear1.svg";
import gear2 from "./imgs/gear2.svg";
import youtube_logo from "./imgs/youtube_logo.png";
import tichop_logo from "./imgs/tichop_logo.svg";
import blueshark_logo from "./imgs/blueshark_logo.svg";
import worthytool_logo from "./imgs/worthytool_logo.svg";

import Modal from "./Modal";

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
    carousels: [],
    newArrival: {},
    bestItem: {},
    error: null,
    firstMovie: null,
    secondMovie: null,
    thirdMovie: null,
    currentLogoIndex: 0,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "http://jkintl.co.kr:10337/api/carousels?populate=*&sort=priority:desc&filters[post]=on"
      );
      const carousels = response.data.data; // response.data.data로 수정

      // Strapi로부터 가져온 carousel 데이터를 사용하여 state 업데이트
      this.setState({ carousels });
    } catch (error) {
      console.error("Error fetching carousels: ", error);
      this.setState({ error });
    }

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

    try {
      const response = await axios.get(
        "http://jkintl.co.kr:10337/api/movies?populate=*"
      );
      const movies = response.data.data;

      // "first", "second", "third" 항목을 가진 영화를 찾습니다.
      const firstMovie = movies.find(
        (movie) => movie.attributes.main_section === "first"
      );
      const secondMovie = movies.find(
        (movie) => movie.attributes.main_section === "second"
      );
      const thirdMovie = movies.find(
        (movie) => movie.attributes.main_section === "third"
      );

      // "first", "second", "third" 항목을 가진 영화가 없을 경우 오류 처리
      if (!firstMovie || !secondMovie || !thirdMovie) {
        throw new Error("Some movies not found");
      }

      // 모든 항목이 존재할 경우 state에 저장
      this.setState({
        firstMovie,
        secondMovie,
        thirdMovie,
        error: null, // 오류가 없으므로 error 상태를 null로 설정
      });
    } catch (error) {
      console.error("Error fetching movies: ", error);
      this.setState({ error });
    }
  };

  componentWillUnmount() {
    // 컴포넌트가 언마운트 될 때 타이머 제거
    clearInterval(this.logoTimer);
  }

  // 로고 변경 함수
  changeLogo = () => {
    this.setState((prevState) => ({
      currentLogoIndex: (prevState.currentLogoIndex + 1) % 3, // 3은 로고 이미지의 개수입니다.
    }));
  };

  render() {
    this.logoTimer = setInterval(this.changeLogo, 300);

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

    const { carousels, firstMovie, secondMovie, thirdMovie, error } =
      this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!carousels.length || !firstMovie || !secondMovie || !thirdMovie) {
      return (
        <div>
          {/* 시간에 따라 변경되는 로고 이미지 */}
          {this.state.currentLogoIndex === 0 && (
            <div className="Logos">
              <img className="LogosImg" src={tichop_logo} />
            </div>
          )}
          {this.state.currentLogoIndex === 1 && (
            <div className="Logos">
              <img className="LogosImg" src={blueshark_logo} />
            </div>
          )}
          {this.state.currentLogoIndex === 2 && (
            <div className="Logos">
              <img className="LogosImg" src={worthytool_logo} />
            </div>
          )}
        </div>
      );
    }

    return (
      <>
        <div className="Main">
          <Modal />
          <div className="carouselContainer">
            <Carousel>
              {carousels.map((carousel) => (
                <Link to={carousel.attributes.address} key={carousel.id}>
                  <CarouselItem key={carousel.id}>
                    {/* 이미지 호출 주소 생성 */}
                    <img
                      className="bannerImg"
                      src={
                        "http://jkintl.co.kr:10337" +
                        carousel.attributes.image_deskTop.data[0].attributes.url
                      }
                      alt={
                        carousel.attributes.image_deskTop.data[0].attributes
                          .caption
                      }
                    />
                  </CarouselItem>
                </Link>
              ))}
            </Carousel>
          </div>

          <div className="carouselContainerMobile">
            <Carousel>
              {carousels.map((carousel) => (
                <Link to={carousel.attributes.address} key={carousel.id}>
                  <CarouselItem key={carousel.id}>
                    <img
                      className="bannerImg"
                      src={
                        "http://jkintl.co.kr:10337" +
                        carousel.attributes.image_Mobile.data[0].attributes.url
                      }
                      alt={
                        carousel.attributes.image_Mobile.data[0].attributes
                          .caption
                      }
                    />
                  </CarouselItem>
                </Link>
              ))}
            </Carousel>
          </div>

          <div className="fix_width">
            <div className="deskTop">
              <div className="section1">NEW ARRIVAL</div>
              <div className="scrollArrow">
                <div id="arrow">
                  <Arrow width="40" height="40" />
                </div>
                <ScrollMenu>
                  <div className="mainStuffgroup" id="stuffGroupMobile">
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
                            <div
                              class="stuffPairGroup"
                              id="stuffPairGroupMobile"
                            >
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

              <div className="section1">BEST ITEM</div>
              <div className="scrollArrow">
                <div id="arrow">
                  <Arrow width="40" height="40" />
                </div>
                <ScrollMenu>
                  <div className="mainStuffgroup" id="stuffGroupMobile">
                    {this.state.bestItem.data &&
                    this.state.bestItem.data.data.map
                      ? this.state.bestItem.data.data.map((pariItem) => {
                          return (
                            <div
                              class="stuffPairGroup"
                              id="stuffPairGroupMobile"
                            >
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

              <div className="section1">HOT VIDEO</div>
              <div className="container3" id="mainContainer3">
                <ul className="link1">
                  <li>
                    <YouTube
                      id="flexMovie"
                      videoId={firstMovie.attributes.video_id}
                    />
                  </li>
                  <li>
                    <YouTube
                      id="flexMovie1"
                      videoId={firstMovie.attributes.video_id}
                      opts={opt}
                    />
                  </li>
                  <li>
                    <ul className="link1_title">
                      <li>
                        <img src={youtube_logo} width="50" height="auto" />
                      </li>
                      <li>
                        <h4 id="hv_title1">{firstMovie.attributes.title}</h4>
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
                          videoId={secondMovie.attributes.video_id}
                          opts={opts}
                        />
                        <YouTube
                          className="flexMovieSmall1"
                          videoId={secondMovie.attributes.video_id}
                          opts={opts1}
                        />
                        <YouTube
                          className="flexMovieSmall2"
                          videoId={secondMovie.attributes.video_id}
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
                            <h6 className="mainMovieTitle">
                              {secondMovie.attributes.title}
                            </h6>
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
                          videoId={thirdMovie.attributes.video_id}
                          opts={opts}
                        />
                        <YouTube
                          className="flexMovieSmall1"
                          videoId={thirdMovie.attributes.video_id}
                          opts={opts1}
                        />
                        <YouTube
                          className="flexMovieSmall2"
                          videoId={thirdMovie.attributes.video_id}
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
                            <h6 className="mainMovieTitle">
                              {thirdMovie.attributes.title}
                            </h6>
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
            <Link to="/as">
              <div className="asInfo">
                <div className="gearText">
                  <div id="gearIcons">
                    <img
                      className="gearIcon1"
                      src={gear1}
                      width="37"
                      height="37"
                    />
                    <img
                      className="gearIcon2"
                      src={gear2}
                      width="20.6"
                      height="auto"
                    />
                  </div>
                  <h1 className="asInfoText">A/S 안내</h1>
                </div>
                <h4 className="consultation">
                  상담시간: 평일 오전 10시 ~ 오후 5시
                  <br />
                  점심시간: 평일 오후 12시 ~ 오후 1시
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
