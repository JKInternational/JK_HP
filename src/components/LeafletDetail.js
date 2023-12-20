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
    if (!leaflet || !leaflet.attributes || !leaflet.attributes.mainImage) {
      return <div>Loading...</div>;
    }

    const mainImages = leaflet.attributes.mainImage.data;

    return (
      <>
        <div className="LeafletDetail">
          <div className="container">
            <div className="innerContainer1">
              <p>
                <h1>{leaflet?.attributes?.title}</h1>
              </p>
              <div id="line" />
            </div>
          </div>
          <ul className="LeafletDetailContainer">
            {mainImages.map((image, index) => (
              <li className="imgWrap" key={index}>
                <img
                  src={"http://jkintl.co.kr:10337" + image?.attributes?.url}
                  className="img800"
                  alt={`Image ${index + 1}`}
                />
              </li>
            ))}
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
