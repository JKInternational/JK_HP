import bannerTichop from "./imgs/bannerTichop.jpg";

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Brand.css";

class TichopPower extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    connect: {},
    cut: {},
    etc: {},
    acc: {},
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=tichop_power&filters[category][1]=connect"
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
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=tichop_power&filters[category][1]=cut"
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
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=tichop_power&filters[category][1]=etc"
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
    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=tichop_power&filters[category][1]=acc"
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
      this.setState({ acc: response });
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
        <div className="TichopPower">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>브랜드</span>
                <span>></span>
                <span>티찹</span>
                <span>></span>
                <span>전동공구</span>
              </div>
              <p>
                <h1>티찹 전동공구</h1>
              </p>
              <div id="line" />
            </div>
          </div>

          <div className="mainBanner">
            <div className="mainBannerParents">
              <img id="mainBannerImg" src={bannerTichop} />
              <div id="mainBannerText">TICHOP</div>
            </div>
          </div>

          {/* 여기까지 MainBanner 적용*/}

          <div className="fix_width">
            <div id="toTichop">
              <button id="linkTichop" type="button">
                <a href="tichopcomp">티찹 컴프레서 보러 가기!</a>
              </button>
            </div>

            <div className="tichopPower1">
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
                                          "http://jkintl.iptime.org:10337" +
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

                {/* 
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tid18blb} /></p>
                    <p id="stuffName">TID-18BL-B</p>
                    <p id="stuffSpec" style={textBox}>임팩트드릴 / 18V / 2.2Ah / 2단 속도 / 베어툴</p>
                  </li>
                </a> */}
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
                                          "http://jkintl.iptime.org:10337" +
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
                                          "http://jkintl.iptime.org:10337" +
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

              <div className="section">악세사리</div>

              <div className="stuffgroup">
                {this.state.acc.data && this.state.acc.data.data.map
                  ? this.state.acc.data.data.map((pairItem) => {
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
                                          "http://jkintl.iptime.org:10337" +
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
        </div>
      </>
    );
  }
}

export default TichopPower;
