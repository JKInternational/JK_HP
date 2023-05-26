import bannerWorthytool from "./imgs/bannerWorthytool1.jpg";
import bannerWorthytoolMobile from "./imgs/bannerWorthytoolMobile1.jpg";

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Brand.css";

class Worthytool extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    bit: {},
    cut: {},
    circular_saw_blade: {},
    connect: {},
    lantern: {},
    etc: {},
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "http://jkintl.co.kr:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=worthytool&filters[category][1]=bit"
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
      this.setState({ bit: response });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const response = await axios.get(
        "http://jkintl.co.kr:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=worthytool&filters[category][1]=cut"
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
      this.setState({ cut: response });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const response = await axios.get(
        "http://jkintl.co.kr:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=worthytool&filters[category][1]=circular_saw_blade"
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
      this.setState({ circular_saw_blade: response });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const response = await axios.get(
        "http://jkintl.co.kr:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=worthytool&filters[category][1]=connect"
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
      this.setState({ connect: response });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const response = await axios.get(
        "http://jkintl.co.kr:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=worthytool&filters[category][1]=lantern"
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
      this.setState({ lantern: response });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const response = await axios.get(
        "http://jkintl.co.kr:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=worthytool&filters[category][1]=etc"
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
      this.setState({ etc: response });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
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

    return (
      <>
        <div className="Worthytool">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>브랜드</span>
                <span>></span>
                <span>워디툴</span>
              </div>
              <p>
                <h1>워디툴</h1>
              </p>
              <div id="line" />
            </div>
          </div>

          <div className="mainBanner">
            <div className="mainBannerParents">
              <img id="mainBannerImg" src={bannerWorthytool} />
              {/* <div id="mainBannerText">WORTHYTOOL</div> */}
            </div>
            <div className="mainBannerParentsMobile">
              <img id="mainBannerImgMobile" src={bannerWorthytoolMobile} />
            </div>
          </div>

          {/* 여기까지 MainBanner 적용*/}

          <div className="fix_width">
            <div className="section">비트</div>
            <div className="stuffgroup">
              {this.state.bit.data && this.state.bit.data.data.map
                ? this.state.bit.data.data.map((pairItem) => {
                    return (
                      <div class="stuffPairGroup">
                        {pairItem.map((item) => {
                          return (
                            <ul className="container0">
                              <Link
                                to={"/detail/" + item.id}
                                className="stuffBoxSwitch"
                                href=""
                              >
                                <li id="stuffBox" style={stuffBox}>
                                  <p>
                                    <img
                                      className="stuffBoxImg"
                                      src={
                                        "http://jkintl.co.kr:10337" +
                                        item.attributes.indexImage.data
                                          .attributes.url
                                      }
                                    />
                                  </p>
                                  <p id="stuffName">{item.attributes.name}</p>
                                  <p id="stuffSpec" style={textBox}>
                                    {item.attributes.mainDescription}
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

            <div className="section">절삭공구</div>
            <div className="stuffgroup">
              {this.state.cut.data && this.state.cut.data.data.map
                ? this.state.cut.data.data.map((pairItem) => {
                    return (
                      <div class="stuffPairGroup">
                        {pairItem.map((item) => {
                          return (
                            <ul className="container0">
                              <Link
                                to={"/detail/" + item.id}
                                className="stuffBoxSwitch"
                                href=""
                              >
                                <li id="stuffBox" style={stuffBox}>
                                  <p>
                                    <img
                                      className="stuffBoxImg"
                                      src={
                                        "http://jkintl.co.kr:10337" +
                                        item.attributes.indexImage.data
                                          .attributes.url
                                      }
                                    />
                                  </p>
                                  <p id="stuffName">{item.attributes.name}</p>
                                  <p id="stuffSpec" style={textBox}>
                                    {item.attributes.mainDescription}
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

            <div className="section">원형톱날</div>
            <div className="stuffgroup">
              {this.state.circular_saw_blade.data &&
              this.state.circular_saw_blade.data.data.map
                ? this.state.circular_saw_blade.data.data.map((pairItem) => {
                    return (
                      <div class="stuffPairGroup">
                        {pairItem.map((item) => {
                          return (
                            <ul className="container0">
                              <Link
                                to={"/detail/" + item.id}
                                className="stuffBoxSwitch"
                                href=""
                              >
                                <li id="stuffBox" style={stuffBox}>
                                  <p>
                                    <img
                                      className="stuffBoxImg"
                                      src={
                                        "http://jkintl.co.kr:10337" +
                                        item.attributes.indexImage.data
                                          .attributes.url
                                      }
                                    />
                                  </p>
                                  <p id="stuffName">{item.attributes.name}</p>
                                  <p id="stuffSpec" style={textBox}>
                                    {item.attributes.mainDescription}
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

            <div className="section">체결공구</div>

            <div className="stuffgroup">
              {this.state.connect.data && this.state.connect.data.data.map
                ? this.state.connect.data.data.map((pairItem) => {
                    return (
                      <div class="stuffPairGroup">
                        {pairItem.map((item) => {
                          return (
                            <ul className="container0">
                              <Link
                                to={"/detail/" + item.id}
                                className="stuffBoxSwitch"
                                href=""
                              >
                                <li id="stuffBox" style={stuffBox}>
                                  <p>
                                    <img
                                      className="stuffBoxImg"
                                      src={
                                        "http://jkintl.co.kr:10337" +
                                        item.attributes.indexImage.data
                                          .attributes.url
                                      }
                                    />
                                  </p>
                                  <p id="stuffName">{item.attributes.name}</p>
                                  <p id="stuffSpec" style={textBox}>
                                    {item.attributes.mainDescription}
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

            <div className="section">랜턴</div>
            <div className="stuffgroup">
              {this.state.lantern.data && this.state.lantern.data.data.map
                ? this.state.lantern.data.data.map((pairItem) => {
                    return (
                      <div class="stuffPairGroup">
                        {pairItem.map((item) => {
                          return (
                            <ul className="container0">
                              <Link
                                to={"/detail/" + item.id}
                                className="stuffBoxSwitch"
                                href=""
                              >
                                <li id="stuffBox" style={stuffBox}>
                                  <p>
                                    <img
                                      className="stuffBoxImg"
                                      src={
                                        "http://jkintl.co.kr:10337" +
                                        item.attributes.indexImage.data
                                          .attributes.url
                                      }
                                    />
                                  </p>
                                  <p id="stuffName">{item.attributes.name}</p>
                                  <p id="stuffSpec" style={textBox}>
                                    {item.attributes.mainDescription}
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

            <div className="section">기타</div>
            <div className="stuffgroup">
              {this.state.etc.data && this.state.etc.data.data.map
                ? this.state.etc.data.data.map((pairItem) => {
                    return (
                      <div class="stuffPairGroup">
                        {pairItem.map((item) => {
                          return (
                            <ul className="container0">
                              <Link
                                to={"/detail/" + item.id}
                                className="stuffBoxSwitch"
                                href=""
                              >
                                <li id="stuffBox" style={stuffBox}>
                                  <p>
                                    <img
                                      className="stuffBoxImg"
                                      src={
                                        "http://jkintl.co.kr:10337" +
                                        item.attributes.indexImage.data
                                          .attributes.url
                                      }
                                    />
                                  </p>
                                  <p id="stuffName">{item.attributes.name}</p>
                                  <p id="stuffSpec" style={textBox}>
                                    {item.attributes.mainDescription}
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
            <div id="blank" />
          </div>
        </div>
      </>
    );
  }
}

export default Worthytool;
