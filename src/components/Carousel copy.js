import bannerTichop from "./imgs/bannerTichop.jpg";
import bannerTichopComp from "./imgs/bannerTichopComp.jpg";
import bannerBlueshark from "./imgs/bannerBlueshark.jpg";
import bannerWorthytool from "./imgs/bannerWorthytool.jpg";
import spriteLeft from "./imgs/spriteLeft.png";
import spriteRight from "./imgs/spriteRight.png";

import React from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.showRightImage = this.showRightImage.bind(this);
    this.showLeftImage = this.showLeftImage.bind(this);
    this.showImage = this.showImage.bind(this);
    this.getAllSlides = this.getAllSlides.bind(this);

    this.imageNo = 0;
  }

  getAllSlides() {
    var e = document.querySelectorAll(".slideElement");
    if (e) {
      return e.length;
    } else {
      return 0;
    }
  }

  showRightImage() {
    this.imageNo += 1;
    if (this.imageNo >= this.getAllSlides()) {
      this.imageNo = 0;
    }
    this.showImage(this.imageNo);
  }

  showLeftImage() {
    this.imageNo -= 1;
    if (this.imageNo < 0) {
      this.imageNo = this.getAllSlides() - 1;
    }
    this.showImage(this.imageNo);
  }

  showImage(imgNo) {
    const element = document.querySelector(".slides");
    if (element) {
      var move = -100 * imgNo;
      element.style.transform = "translate(" + move.toString() + "vw)";
    }
  }

  render() {
    return (
      <>
        <div className="Main">
          <div className="slideShow">
            <div className="slideShowNav">
              <a className="prev" onClick={this.showLeftImage.bind(this)}>
                <img src={spriteLeft} />
              </a>
              <a className="next" onClick={this.showRightImage.bind(this)}>
                <img src={spriteRight} />
              </a>
            </div>

            <div className="slides">
              <a className="slide1 slideElement" href="">
                <div className="mainBanner">
                  <div className="mainBannerParents">
                    <Link to="tichoppower">
                      <img id="mainBannerImg" src={bannerTichop} />
                    </Link>
                  </div>
                </div>
              </a>

              <a className="slide1 slideElement" href="">
                <div className="mainBanner">
                  <div className="mainBannerParents">
                    <Link to="tichopcomp">
                      <img id="mainBannerImg" src={bannerTichopComp} />
                    </Link>
                  </div>
                </div>
              </a>
              <a className="slide1 slideElement" href="">
                <div className="mainBanner">
                  <div className="mainBannerParents">
                    <Link to="blueshark">
                      <img id="mainBannerImg" src={bannerBlueshark} />
                    </Link>
                  </div>
                </div>
              </a>
              <a className="slide1 slideElement" href="">
                <div className="mainBanner">
                  <div className="mainBannerParents">
                    <Link to="worthytool">
                      <img id="mainBannerImg" src={bannerWorthytool} />
                    </Link>
                  </div>
                </div>
              </a>
            </div>
            {/* 여기까지 MainBanner*/}
            <div className="indicator">
              {/*https://stackoverflow.com/questions/34226076/why-is-my-onclick-being-called-on-render-react-js */}
              <button className="btn1" onClick={this.showImage.bind(this, 0)} />
              <button className="btn2" onClick={() => this.showImage(1)} />
              <button className="btn3" onClick={this.showImage.bind(this, 2)} />
              <button className="btn3" onClick={this.showImage.bind(this, 3)} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
