import bannerBlueshark from "./imgs/bannerBlueshark.jpg";

import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Brand.css";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    searchFunction: {},
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?populate=*&_limit=-1&filters[$or][0][description][$containsi]=★★★★★★&filters[$or][1][name][$containsi]=1&filters[$or][2][mainDescription][$containsi]=a"
      );
      this.setState({ searchFunction: response });
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
      margin: "10px",
      padding: "10px",
    };

    if (this.state.고쳐야할부분.data) {
      console.log(this.state.고쳐야할부분.data.data);
    }

    return (
      <>
        <div className="SearchPage">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>검색결과</span>
              </div>
              <p>
                <h1>검색결과</h1>
              </p>
              <div id="line" />
            </div>
          </div>

          <div className="mainBanner">
            <div className="mainBannerParents">
              <img id="mainBannerImg" src={bannerBlueshark} />
              <div id="mainBannerText">검색결과</div>
            </div>
          </div>

          {/* 여기까지 MainBanner 적용*/}

          <div className="fix_width">
            <div className="section">검색결과입니다.</div>

            <div className="stuffgroup">
              {this.state.고쳐야할부분.data &&
              this.state.고쳐야할부분.data.data.map
                ? this.state.고쳐야할부분.data.data.map(item => {
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
                                  item.attributes.indexImage.data.attributes.url
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
                  })
                : ""}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchPage;
