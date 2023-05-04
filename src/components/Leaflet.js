import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Leaflet.css";

class Leaflet extends React.Component {
  state = {
    leaflets: [],
    sort: "asc",
    search: "",
    filteredLeaflets: [],
  };

  componentDidMount() {
    axios
      .get("http://jkintl.iptime.org:10337/api/leaflets?populate=*")
      .then((response) => {
        this.setState({ leaflets: response.data.data });
      });
  }

  handleSortChange = (e) => {
    const sort = e.target.value;
    this.setState({ sort }, () => {
      this.sortLeaflets();
    });
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSearchEnterPress = (e) => {
    if (e.key === "Enter") {
      this.handleSearchButtonClick();
    }
  };

  handleSearchButtonClick = () => {
    const { leaflets, search } = this.state;

    if (search === "") {
      this.setState({ filteredLeaflets: [], search: "" }, () => {
        this.sortLeaflets();
      });
    } else {
      // 검색어에 따라 전단지를 필터링합니다.
      const filteredLeaflets = leaflets.filter((leaflet) =>
        leaflet.attributes.title
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      );

      // 필터링된 전단지 목록을 상태값에 업데이트합니다.
      this.setState({ filteredLeaflets }, () => {
        this.sortLeaflets();
      });
    }
  };

  sortLeaflets = () => {
    const { sort, filteredLeaflets, leaflets } = this.state;

    // 리스트를 오름차순 또는 내림차순으로 정렬합니다.
    const sortedLeaflets =
      filteredLeaflets.length > 0 ? filteredLeaflets : leaflets;
    const sortedFilteredLeaflets = sortedLeaflets.sort((a, b) => {
      if (sort === "asc") {
        return a.attributes.title.localeCompare(b.attributes.title);
      } else {
        return b.attributes.title.localeCompare(a.attributes.title);
      }
    });

    // 정렬된 전단지 목록을 상태값에 업데이트합니다.
    this.setState({ filteredLeaflets: sortedFilteredLeaflets });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search === "" && prevState.search !== "") {
      this.setState({ filteredLeaflets: [] }, () => {
        this.sortLeaflets();
      });
    }
  }

  render() {
    const { sort, search, filteredLeaflets } = this.state;

    // 검색어에 따라 전단지를 필터링합니다.
    const sortedLeaflets =
      filteredLeaflets.length > 0 ? filteredLeaflets : this.state.leaflets;
    const filteredSortedLeaflets = sortedLeaflets.filter((leaflet) =>
      leaflet.attributes.title
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    );

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
          <div className="sortAndSearchContainer">
            <ul className="sortAndSearch">
              <li className="sortContainer">
                <label htmlFor="sort">
                  <h4 id="barndName">브랜드</h4>
                </label>
                <select id="sort" value={sort} onChange={this.handleSortChange}>
                  <option value="asc">A ▶ Z</option>
                  <option value="desc">Z ▶ A</option>
                </select>
              </li>
              <li className="searchContainer">
                <input
                  id="searchBox"
                  type="text"
                  placeholder=" 검색어를 입력하세요"
                  value={search}
                  onChange={this.handleSearchChange}
                  onKeyPress={this.handleSearchEnterPress}
                />
                <div id="wall">
                  <button
                    id="searchBtn1"
                    onClick={this.handleSearchButtonClick}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="indexContainer">
            <ul className="indexList">
              {sortedLeaflets.map((leaflet, index) => (
                <li key={leaflet.id} className="indexListWidth">
                  <Link to={`/leaflet/leafletdetail/${leaflet.id}`}>
                    <ul className="indexImg">
                      <li className="noAndImage">
                        <h4 className="autoNo">{index + 1}.</h4>
                      </li>
                      <li className="imgAlign">
                        <img
                          src={
                            "http://jkintl.iptime.org:10337" +
                            leaflet.attributes.indexImage.data[0].attributes.url
                          }
                          className="edge"
                        />
                      </li>
                      <li className="textPadding">
                        <h4 className="textAlign">
                          {leaflet.attributes.title}
                        </h4>
                      </li>
                    </ul>
                  </Link>
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
