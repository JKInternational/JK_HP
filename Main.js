import mainEdgeUp from "./imgs/mainEdgeUp.png";
import mainEdgeDown from "./imgs/mainEdgeDown.png";
import spriteLeft from "./imgs/spriteLeft.png";
import spriteRight from "./imgs/spriteRight.png";
import dc990s from "./imgs/990s.png";
import main_1_886 from "./imgs/main_1_886.png";
import youtube_logo from "./imgs/youtube_logo.png";
import React from 'react';
import YouTube from 'react-youtube';
import './Main.css';


class Main extends React.Component {


    constructor(props) {
        super(props);

        this.showRightImage = this.showRightImage.bind(this);
        this.showLeftImage = this.showLeftImage.bind(this);
        this.showImage = this.showImage.bind(this);
        this.getAllSlides = this.getAllSlides.bind(this);

        this.imageNo = 0;
    }

    getAllSlides() {
        var e = document.querySelectorAll(".slideElement")
        if (e) {
            return e.length
        } else {
            return 0
        }
    }

    showRightImage() {
        this.imageNo += 1;
        if(this.imageNo >= this.getAllSlides()) {
            this.imageNo = 0;
        }
        this.showImage(this.imageNo);
    }

    showLeftImage() {
        this.imageNo -= 1;
        if(this.imageNo < 0) {
            this.imageNo = this.getAllSlides() -1;
        }
        this.showImage(this.imageNo);
    }

    showImage(imgNo) {
        const element = document.querySelector('.slides')
        if(element) {
            var move = -100 * imgNo
            element.style.transform = 'translate(' + move.toString() + 'vw)'
        }
    }

    /*
    componentDidMount() {
        this is function that intended to run after dom is rendred,
        but in practically, it is executed duing dom is rendering.
        do not use this function to add eventhandler.
    }
    */

  render() {
    const opts = {
      height: '130',
      width: '214',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

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

      return <>
      <div className="Main">
      
        <div className="slideShow">
          <div className="slideShowNav">
            <a className="prev" onClick={this.showLeftImage.bind(this)}><img src={spriteLeft} /></a>
            <a className="next" onClick={this.showRightImage.bind(this)}><img src={spriteRight} /></a>
          </div>
            
          <div className="slides">
            <a className="slide1 slideElement" href="">
              <div><img id="edge1" src={mainEdgeUp} /></div>
              <div className="mainBannerBack">
                <div className="mainBannerRect">
                  <span><img id="mainBannerImg" srcSet={`${main_1_886} 1800w`} src={main_1_886} /></span>
                  <span className="mainBannerText1">
                    <p id="mainBannerText1_1">BRUSHLESS MORTORED</p>
                    <p id="mainBannerText1_2">COMPRESSOR</p>
                    <p id="mainBannerText1_3">DC-886</p>
                  </span>
                </div>
              </div>
              <div><img id="edge1" src={mainEdgeDown} /></div>
            </a>
            <a className="slide2 slideElement" href="">
              <div><img id="edge1" src={mainEdgeUp} /></div>
              <div className="mainBannerBack">
                <div className="mainBannerRect">
                  <span><img id="mainBannerImg" srcSet={`${main_1_886} 1800w`} src={main_1_886} /></span>
                  <span className="mainBannerText1">
                    <p id="mainBannerText1_1">BRUSHLESS MORTORED</p>
                    <p id="mainBannerText1_2">COMPRESSOR</p>
                    <p id="mainBannerText1_3">서비트</p>
                  </span>
                </div>
              </div>
              <div><img id="edge1" src={mainEdgeDown} /></div>
            </a>
            <a className="slide3 slideElement" href="">
              <div><img id="edge1" src={mainEdgeUp} /></div>
              <div className="mainBannerBack">
                <div className="mainBannerRect">
                  <span><img id="mainBannerImg" srcSet={`${main_1_886} 1800w`} src={main_1_886} /></span>
                  <span className="mainBannerText1">
                    <p id="mainBannerText1_1">BRUSHLESS MORTORED</p>
                    <p id="mainBannerText1_2">COMPRESSOR</p>
                    <p id="mainBannerText1_3">정호영</p>
                  </span>
                </div>
              </div>
              <div><img id="edge1" src={mainEdgeDown} /></div>
            </a>
            <a className="slide4 slideElement" href="">
              <div><img id="edge1" src={mainEdgeUp} /></div>
              <div className="mainBannerBack">
                <div className="mainBannerRect">
                  <span><img id="mainBannerImg" srcSet={`${main_1_886} 1800w`} src={main_1_886} /></span>
                  <span className="mainBannerText1">
                    <p id="mainBannerText1_1">BRUSHLESS MORTORED</p>
                    <p id="mainBannerText1_2">COMPRESSOR</p>
                    <p id="mainBannerText1_3">정호준</p>
                  </span>
                </div>
              </div>
              <div><img id="edge1" src={mainEdgeDown} /></div>
            </a>
          </div>{/* 여기까지 MainBanner*/}
          <div className="indicator">
            { /*https://stackoverflow.com/questions/34226076/why-is-my-onclick-being-called-on-render-react-js */ }
            <button className="btn1" onClick={this.showImage.bind(this, 0)} />
            <button className="btn2" onClick={() => this.showImage(1)} />
            <button className="btn3" onClick={this.showImage.bind(this, 2)} />
            <button className="btn3" onClick={this.showImage.bind(this, 3)} />
          </div>
        </div>

        {/* 여기까지 MainBanner Slide 적용*/}

        <div className="fix_width">
          <div className="section1">
            NEW ARRIVAL
          </div>
      
          <div>
            <ul className="container0">
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img className="stuffBoxImg" src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img className="stuffBoxImg" src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                  <p><img className="stuffBoxImg" src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img className="stuffBoxImg" src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
            </ul>
          </div>

          <div className="section2">
            BEST ITEM
          </div>
      
          <div>
            <ul className="container0">
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                <p><img className="stuffBoxImg" src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img className="stuffBoxImg" src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                  <p><img className="stuffBoxImg" src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                <p><img className="stuffBoxImg" src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
            </ul>
          </div>

          <div className="section3">
            HOT VIDEO
          </div>

          <div className="container3">
            <ul className="link1">
              <li><YouTube id="flexMovie" videoId="vkdCwT_zFo8" /></li>
              <li>
                <ul className="link1_title">
                  <li><img src={youtube_logo} width="50" height="auto" /></li>
                  <li><h4 id="hv_title1">4인치 클린디스크 리뷰</h4></li>
                </ul>
              </li>
            </ul>
            <ul className="link2_3">
              <li>
                <ul className="link2">
                  <li><YouTube videoId="oQqUjYhr31U" opts={opts} /></li>
                  <li>
                    <ul className="link2_title">
                      <li><img id="yt_logo" src={youtube_logo} width="40" height="auto" /></li>
                      <li><h6>TCS-165BL 리뷰</h6></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="link3">
                  <li><YouTube videoId="tV88tMBQhFs" opts={opts} /></li>
                  <li>
                    <ul className="link2_title">
                      <li><img id="yt_logo" src={youtube_logo} width="40" height="auto" /></li>
                      <li><h6>THD/TID-18BL 리뷰</h6></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href=""><h5 id="more">+ 더보기</h5></a></li>
            </ul>
          </div>
      </div>

    </div>

    </>;
  }
}

export default Main;