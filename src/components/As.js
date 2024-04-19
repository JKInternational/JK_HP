import asInformation from "./imgs/asInformation.jpg";

import React from "react";

import "./As.css";

class As extends React.Component {
  render() {
    return (
      <>
        <div className="As">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>고객지원</span>
                <span>></span>
                <span>A/S안내</span>
              </div>
              <p>
                <h1>A/S안내</h1>
              </p>
              <div id="line" />
            </div>
          </div>
          <div className="asInfoAlign">
            <img className="asInformation" src={asInformation} />
          </div>
        </div>
      </>
    );
  }
}

export default As;
