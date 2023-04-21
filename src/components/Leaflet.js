import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Leaflet.css";

class Leaflet extends React.Component {
  state = {
    leaflets: [],
    sort: "asc",
  };

  componentDidMount() {
    axios
      .get("http://jkintl.iptime.org:10337/api/leaflets?populate=*")
      .then((response) => {
        this.setState({ leaflets: response.data.data });
        console.log(response.data.data);
      });
  }

  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
  };

  render() {
    const { leaflets, sort } = this.state;

    // 리스트를 오름차순 또는 내림차순으로 정렬합니다.
    const sortedLeaflets = leaflets.sort((a, b) => {
      if (sort === "asc") {
        return a.attributes.title.localeCompare(b.attributes.title);
      } else {
        return b.attributes.title.localeCompare(a.attributes.title);
      }
    });

    return (
      <>
        <div className="Leaflet">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>고객지원</span>
                <span>></span>
                <span>전단지</span>
              </div>
              <p>
                <h1>전단지</h1>
              </p>
              <div id="line" />
            </div>
          </div>
          <div className="sortContainer">
            <label htmlFor="sort">정렬:&nbsp;</label>
            <select id="sort" value={sort} onChange={this.handleSortChange}>
              <option value="asc">오름차순</option>
              <option value="desc">내림차순</option>
            </select>
          </div>
          <div className="indexContainer">
            <ul className="indexList">
              {sortedLeaflets.map((leaflet, index) => (
                <li key={leaflet.id} className="indexListWidth">
                  <Link to={`/leaflet/leafletdetail/${leaflet.id}`}>
                    <div className="indexImg">
                      <div className="noAndImage">
                        <p className="textPadding">
                          <h4 className="autoNo">{index + 1}</h4>
                        </p>
                        <div className="imgAlign">
                          <img
                            src={
                              "http://jkintl.iptime.org:10337" +
                              leaflet.attributes.indexImage.data[0].attributes
                                .url
                            }
                            className="edge"
                          />
                        </div>
                      </div>
                      <p className="textPadding">
                        <h4 className="textAlign">
                          {leaflet.attributes.title}
                        </h4>
                      </p>
                    </div>
                  </Link>
                  <div id="line1" />
                </li>
              ))}
            </ul>
          </div>
          <div className="indexContainer1">
            <ul className="indexList">
              {this.state.leaflets.map((leaflet, index) => (
                <li key={leaflet.id} className="indexListWidth">
                  <Link to={`/leaflet/leafletdetail/${leaflet.id}`}>
                    <div className="imgAlign">
                      <img
                        src={
                          "http://jkintl.iptime.org:10337" +
                          leaflet.attributes.indexImage.data[0].attributes.url
                        }
                        className="edge"
                      />
                    </div>{" "}
                  </Link>
                  <p className="textPadding">
                    <h5 className="textAlign">
                      {index + 1}. {leaflet.attributes.title}
                    </h5>
                  </p>
                  <div id="line1" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Leaflet;
