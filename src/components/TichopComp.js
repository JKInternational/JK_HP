import bannerTichopComp from "./imgs/bannerTichopComp.jpg";
import bannerTichopCompMobile from "./imgs/bannerTichopCompMobile.jpg";

import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import "./Brand.css";

class TichopComp extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    comp_1hp: {},
    comp_2hp: {},
    comp_4hp: {},
    etc: {},
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=tichop_comp&filters[category][1]=comp_1hp"
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

      this.setState({ comp_1hp: response });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=tichop_comp&filters[category][1]=comp_2hp"
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

      this.setState({ comp_2hp: response });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=tichop_comp&filters[category][1]=comp_4hp"
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

      this.setState({ comp_4hp: response });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=tichop_comp&filters[category][1]=etc"
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
        <div className="TichopComp">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>?????????</span>
                <span>></span>
                <span>??????</span>
                <span>></span>
                <span>????????????</span>
              </div>
              <p>
                <h1>?????? ????????????</h1>
              </p>
              <div id="line" />
            </div>
          </div>

          <div className="mainBanner">
            <div className="mainBannerParents">
              <img id="mainBannerImg" src={bannerTichopComp} />
              <div id="mainBannerText">TICHOP</div>
            </div>
            <div className="mainBannerParentsMobile">
              <img id="mainBannerImgMobile" src={bannerTichopCompMobile} />
            </div>
          </div>

          {/* ???????????? MainBanner ??????*/}

          <div className="fix_width">
            <div className="tichopComp1">
              <div className="section">1??????</div>
              <div className="stuffgroup">
                {this.state.comp_1hp.data && this.state.comp_1hp.data.data.map
                  ? this.state.comp_1hp.data.data.map((pairItem) => {
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

              <div className="section">2??????</div>
              <div className="stuffgroup">
                {this.state.comp_2hp.data && this.state.comp_2hp.data.data.map
                  ? this.state.comp_2hp.data.data.map((pairItem) => {
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

              <div className="section">4??????</div>
              <div className="stuffgroup">
                {this.state.comp_4hp.data && this.state.comp_4hp.data.data.map
                  ? this.state.comp_4hp.data.data.map((pairItem) => {
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

              <div className="section">??????</div>
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
              <div id="blank" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TichopComp;
