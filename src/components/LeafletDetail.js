import React from "react";
import axios from "axios";
import withRouter from "./util.js";
import ShareBtnsLeaflet from "./ShareBtnsLeaflet.js";

import "./LeafletDetail.css";

class LeafletDetail extends React.Component {
  state = {
    leaflet: {},
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "http://jkintl.co.kr:10337/api/leaflets/" +
          String(this.props.params.id) +
          "?populate=*"
      );
      this.setState({ leaflet: response.data.data });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { leaflet } = this.state;
    if (!leaflet) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <div className="LeafletDetail">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>고객지원</span>
                <span>></span>
                <span>전단지</span>
                <span>></span>
                <span>제품</span>
              </div>
              <p>
                <h1>{leaflet?.attributes?.title}</h1>
              </p>
              <div id="line" />
            </div>
          </div>
          <ul className="LeafletDetailContainer">
            <li className="imgWrap">
              <img
                src={
                  "http://jkintl.co.kr:10337" +
                  leaflet?.attributes?.mainImage?.data?.[0]?.attributes?.url
                }
                className="img800"
              />
            </li>
            <li className="leafletShares">
              <ShareBtnsLeaflet leaflet={this.state || {}} />
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(LeafletDetail);
