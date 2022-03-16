import searchBtn from "./imgs/search_btn.png";

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import withRouter from "./util.js";
import "./Brand.css";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    searchFunction: {},
  };

  componentDidMount = async () => {
    var iserror = false;

    try {
      // console.log(this.props.params.query);
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?populate=*&_limit=-1&filters[$or][0][description][$containsi]=" +
          String(this.props.params.query) +
          "&filters[$or][1][name][$containsi]=" +
          String(this.props.params.query) +
          "&filters[$or][2][mainDescription][$containsi]=" +
          String(this.props.params.query)
      );
      // console.log(response);
      // this.setState({ searchFunction: response });
    } catch (error) {
      iserror = true;
    }
    if (iserror) {
      this.setState({
        searchFunction: { data: { data: [] } },
      });
    }

    try {
      // console.log(this.props.params.query);
      const response = await axios.get(
        "http://jkintl.iptime.org:10337/api/items/?populate=*&_limit=-1&filters[$or][0][description][$containsi]=" +
          String(this.props.params.query) +
          "&filters[$or][1][name][$containsi]=" +
          String(this.props.params.query) +
          "&filters[$or][2][mainDescription][$containsi]=" +
          String(this.props.params.query)
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

    // if (this.state.searchFunction) {
    //   console.log("kim");
    //   console.log(this.state.searchFunction);
    //   console.log("YO");
    // }

    return (
      <>
        <div className="SearchPage">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>상품검색</span>
              </div>
              <p>
                <h1>상품검색</h1>
              </p>
              <div id="line" />
            </div>
          </div>

          <div className="navbar_search1">
            <input type="text" placeholder="제품 찾기" />
            <Link to="searchpage/:query">
              <button id="searchBtn">
                <img src={searchBtn} />
              </button>
            </Link>
          </div>

          <div className="fix_width">
            {/* <div className="section">검색결과입니다.</div> */}

            <div className="stuffgroup">
              {this.state.searchFunction.data &&
              this.state.searchFunction.data.data.map &&
              this.state.searchFunction.data.data.length > 0 ? (
                this.state.searchFunction.data.data.map((pairItem) => {
                  return (
                    <div class="stuffPairGroup">
                      {pairItem.map((item) => {
                        return (
                          <ul className="container0">
                            <Link
                              to={"/searchpage/" + item.id}
                              className="stuffBoxSwitch"
                              href=""
                            >
                              <li id="stuffBox" style={stuffBox}>
                                <p>
                                  <img
                                    className="stuffBoxImg"
                                    src={
                                      "http://jkintl.iptime.org:10337" +
                                      item.attributes.indexImage.data.attributes
                                        .url
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
              ) : (
                <h2 id="noStuff">찾으시는 상품이 없습니다.</h2>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(SearchPage);
