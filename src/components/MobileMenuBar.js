import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "./hideScrollbar.css";

class MobileMenuBar extends React.Component {
  render() {
    return (
      <>
        <div className="mobileMenuBar">
          <ScrollMenu>
            <ul className="menuBar">
              <Link to="/introduce">
                <li>회사소개</li>
              </Link>
              <Link to="/tichoppower">
                <li>티찹전동공구</li>
              </Link>
              <Link to="/tichopcomp">
                <li>티찹컴프레서</li>
              </Link>
              <Link to="/blueshark">
                <li>블루샤크</li>
              </Link>
              <Link to="/worthytool">
                <li>워디툴</li>
              </Link>
              <Link to="/movie">
                <li>동영상리뷰</li>
              </Link>
              <Link to="/notice">
                <li>소식</li>
              </Link>
              <Link to="/contact">
                <li>찾아오시는길</li>
              </Link>
            </ul>
          </ScrollMenu>
        </div>
      </>
    );
  }
}

export default MobileMenuBar;
