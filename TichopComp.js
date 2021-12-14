import dc1090 from "./imgs/dc1090.png";
import dc660 from "./imgs/dc660.png";
import dc661 from "./imgs/dc661.png";
import dc662 from "./imgs/dc662.png";
import dc1081 from "./imgs/dc1081.png";
import dc990s from "./imgs/dc990s.png";
import dc990k from "./imgs/dc990k.png";
import dc886 from "./imgs/dc886.png";
import dc992 from "./imgs/dc992.png";
import dc990x2 from "./imgs/dc990x2.png";
import dc990x3 from "./imgs/dc990x3.png";
import bannerTichopComp from "./imgs/bannerTichopComp.jpg";
import React from 'react';
import './Brand.css';


class TichopComp extends React.Component {


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

      return <>
      <div className="TichopComp">
      

        <div className="container">
          <div className="innerContainer1">
            <div className="category">
              <span>Home</span>
              <span>></span>
              <span>브랜드</span>
              <span>></span>
              <span>티찹</span>
              <span>></span>
              <span>컴프레서</span>
            </div>
            <p><h1>티찹 컴프레서</h1></p>
            <div id="line" />
          </div>
        </div>

        <div className="mainBanner">
          <div className="mainBannerParents">
            <img id="mainBannerImg" src={bannerTichopComp} />
            <div id="mainBannerText">TICHOP</div>
          </div>
        </div>

        {/* 여기까지 MainBanner 적용*/}




        <div className="fix_width">

        <div id="toTichop">
            <button id="linkTichop" type="button">
              <a href='tichoppower'>
                티찹 전동공구 보러 가기!
              </a>
            </button>
          </div>


          <div className="tichopComp1">

            <div className="section">
              1마력
            </div>
        
            <div className="stuffgroup">
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={dc1090} /></p>
                    <p id="stuffName">DC-1090</p>
                    <p id="stuffSpec" style={textBox}>DC18V / AC / 5L / AL TANK</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={dc1090} /></p>
                    <p id="stuffName">DC-1090M</p>
                    <p id="stuffSpec" style={textBox}>DC12V / AC / 5L / AL TANK</p>
                  </li>
                </a>
              </ul>
            </div>

            <div className="section">
              2마력
            </div>
        
            <div className="stuffgroup">
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={dc660} /></p>
                    <p id="stuffName">DC-660</p>
                    <p id="stuffSpec" style={textBox}>AC / 탱크리스</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={dc661} /></p>
                    <p id="stuffName">DC-661</p>
                    <p id="stuffSpec" style={textBox}>AC / 7L</p>
                  </li>
                </a>
                </ul>
                <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                    <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={dc662} /></p>
                    <p id="stuffName">DC-662</p>
                    <p id="stuffSpec" style={textBox}>AC / 17L / AL TANK</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={dc1081} /></p>
                    <p id="stuffName">DC-1081</p>
                    <p id="stuffSpec" style={textBox}>AC / 5L</p>
                  </li>
                </a>
              </ul>
            </div>

            <div className="section">
              4마력
            </div>
        
            <div className="stuffgroup">
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={dc990s} /></p>
                    <p id="stuffName">DC-990S</p>
                    <p id="stuffSpec" style={textBox}>AC / 1L / AL TANK</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={dc886} /></p>
                    <p id="stuffName">DC-886</p>
                    <p id="stuffSpec" style={textBox}>AC / 17L / AL TANK</p>
                  </li>
                </a>
                </ul>
                <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                    <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={dc990k} /></p>
                    <p id="stuffName">DC-990K</p>
                    <p id="stuffSpec" style={textBox}>AC / 20L</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={dc992} /></p>
                    <p id="stuffName">DC-992</p>
                    <p id="stuffSpec" style={textBox}>AC / 40L / AL TANK</p>
                  </li>
                </a>
              </ul>
            </div>

            <div className="section">
              기타
            </div>
        
            <div className="stuffgroup">
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={dc990x2} /></p>
                    <p id="stuffName">DC-990X2</p>
                    <p id="stuffSpec" style={textBox}>AC / 2헤드 / 50L</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={dc990x3} /></p>
                    <p id="stuffName">DC-990X3</p>
                    <p id="stuffSpec" style={textBox}>AC / 3헤드 / 70L</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>




      </div>

    </div>

    </>;
  }
}

export default TichopComp;