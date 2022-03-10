import bannerBlueshark from "./imgs/bannerBlueshark.jpg";

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Brand.css";

class Blueshark extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    cutting_stone: {},
    polishing_stone: {},
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=blueshark&filters[category][1]=cutting_stone"
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
      this.setState({ cutting_stone: response });
    } catch (error) {
      this.setState({ error });
    }

    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?_limit=-1&populate=*&filters[brand][0]=blueshark&filters[category][1]=polishing_stone"
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
      this.setState({ polishing_stone: response });
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
        <div className="Blueshark">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>브랜드</span>
                <span>></span>
                <span>블루샤크</span>
              </div>
              <p>
                <h1>블루샤크</h1>
              </p>
              <div id="line" />
            </div>
          </div>

          <div className="mainBanner">
            <div className="mainBannerParents">
              <img id="mainBannerImg" src={bannerBlueshark} />
              <div id="mainBannerText">BLUESHARK</div>
            </div>
          </div>

          {/* 여기까지 MainBanner 적용*/}

          <div className="fix_width">
            <div className="section">절단석</div>
            <div className="stuffgroup">
              {this.state.cutting_stone.data &&
              this.state.cutting_stone.data.data.map
                ? this.state.cutting_stone.data.data.map((pairItem) => {
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

            <div className="section">연마석</div>

            <div className="stuffgroup">
              {this.state.polishing_stone.data &&
              this.state.polishing_stone.data.data.map
                ? this.state.polishing_stone.data.data.map((pairItem) => {
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
          </div>
        </div>
      </>
    );
  }
}

export default Blueshark;
