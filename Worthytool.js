import wt2007 from "./imgs/wt2007.png";
import wt3007 from "./imgs/wt3007.png";
import wt3081 from "./imgs/wt3081.png";
import wt6124 from "./imgs/wt6124.png";
import wt8019 from "./imgs/wt8019.png";
import wt9002 from "./imgs/wt9002.png";
import wtt6g1 from "./imgs/wtt6g1.png";
import blac1 from "./imgs/blac1.png";
import wt308312 from "./imgs/wt308312.png";
import wch1815li from "./imgs/wch1815li.png";
import wt39h from "./imgs/wt39h.jpg";
import wt50h from "./imgs/wt50h.jpg";
import wtc6 from "./imgs/wtc6.png";
import wtc7 from "./imgs/wtc7.png";
import wtc8 from "./imgs/wtc8.png";
import wt0412 from "./imgs/wt0412.png";
import wt001 from "./imgs/wt001.png";
import wt0420 from "./imgs/wt0420.png";
import wt0432 from "./imgs/wt0432.png";
import wt0535 from "./imgs/wt0535.png";
import wt110611651108 from "./imgs/wt110611651108.jpg";
import wtcdb6 from "./imgs/wtcdb6.jpg";
import wtdb6 from "./imgs/wtdb6.jpg";
import wtidbs5 from "./imgs/wtidbs5.jpg";
import wt610026100 from "./imgs/wt610026100.jpg";
import openGear from "./imgs/openGear.png";
import wt555 from "./imgs/wt555.png";
import wt105x40 from "./imgs/wt105x40.png";
import wt185x52 from "./imgs/wt185x52.png";
import wt185x60 from "./imgs/wt185x60.png";
import wt255x60 from "./imgs/wt255x60.png";
import wt355x72 from "./imgs/wt355x72.png";
import wt355x80 from "./imgs/wt355x80.png";
import tsw165 from "./imgs/tsw165.png";
import tsw255 from "./imgs/tsw255.png";
import wtc0540 from "./imgs/wtc0540.png";
import bannerWorthytool from "./imgs/bannerWorthytool.jpg";
import React from 'react';
import './Brand.css';


class Worthytool extends React.Component {


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
      <div className="Worthytool">
      

        <div className="container">
          <div className="innerContainer1">
            <div className="category">
              <span>Home</span>
              <span>></span>
              <span>브랜드</span>
              <span>></span>
              <span>워디툴</span>
            </div>
            <p><h1>워디툴</h1></p>
            <div id="line" />
          </div>
        </div>

        <div className="mainBanner">
          <div className="mainBannerParents">
            <img id="mainBannerImg" src={bannerWorthytool} />
            <div id="mainBannerText">WORTHYTOOL</div>
          </div>
        </div>

        {/* 여기까지 MainBanner 적용*/}




        <div className="fix_width">

            <div className="section">
              비트
            </div>
        
            <div className="stuffgroup">
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt001} /></p>
                    <p id="stuffName">WT-001</p>
                    <p id="stuffSpec" style={textBox}>DC18V / AC / 5L / AL TANK</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt0420} /></p>
                    <p id="stuffName">WT-0420</p>
                    <p id="stuffSpec" style={textBox}>DC12V / AC / 5L / AL TANK</p>
                  </li>
                </a>
              </ul>
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt0432} /></p>
                    <p id="stuffName">WT-0432</p>
                    <p id="stuffSpec" style={textBox}>DC18V / AC / 5L / AL TANK</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt0535} /></p>
                    <p id="stuffName">WT-0535</p>
                    <p id="stuffSpec" style={textBox}>DC12V / AC / 5L / AL TANK</p>
                  </li>
                </a>
              </ul>
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wtcdb6} /></p>
                    <p id="stuffName">WT-CDB6</p>
                    <p id="stuffSpec" style={textBox}>DC18V / AC / 5L / AL TANK</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wtdb6} /></p>
                    <p id="stuffName">WT-DB6</p>
                    <p id="stuffSpec" style={textBox}>DC12V / AC / 5L / AL TANK</p>
                  </li>
                </a>
              </ul>
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wtidbs5} /></p>
                    <p id="stuffName">WT-IDBS5</p>
                    <p id="stuffSpec" style={textBox}>DC18V / AC / 5L / AL TANK</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt110611651108} /></p>
                    <p id="stuffName">타일드릴비트</p>
                    <p id="stuffSpec" style={textBox}>DC12V / AC / 5L / AL TANK</p>
                  </li>
                </a>
              </ul>
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt0412} /></p>
                    <p id="stuffName">WT-0412</p>
                    <p id="stuffSpec" style={textBox}>DC18V / AC / 5L / AL TANK</p>
                  </li>
                </a>
              </ul>
            </div>

            <div className="section">
              절삭공구
            </div>
        
            <div className="stuffgroup">
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wtc6} /></p>
                    <p id="stuffName">WTC-6</p>
                    <p id="stuffSpec" style={textBox}>AC / 탱크리스</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wtc7} /></p>
                    <p id="stuffName">WTC-7</p>
                    <p id="stuffSpec" style={textBox}>AC / 7L</p>
                  </li>
                </a>
                </ul>
                <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                    <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wtc8} /></p>
                    <p id="stuffName">WTC-8</p>
                    <p id="stuffSpec" style={textBox}>AC / 17L / AL TANK</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt39h} /></p>
                    <p id="stuffName">WT-39H</p>
                    <p id="stuffSpec" style={textBox}>AC / 5L</p>
                  </li>
                </a>
              </ul>
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                    <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt50h} /></p>
                    <p id="stuffName">WT-50H</p>
                    <p id="stuffSpec" style={textBox}>AC / 17L / AL TANK</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt39h} /></p>
                    <p id="stuffName">WTC-0443</p>
                    <p id="stuffSpec" style={textBox}>AC / 5L</p>
                  </li>
                </a>
              </ul>
            </div>

            <div className="section">
              원형톱날
            </div>
        
            <div className="stuffgroup">
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tsw165} /></p>
                    <p id="stuffName">TSW-165</p>
                    <p id="stuffSpec" style={textBox}>AC / 1L / AL TANK</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tsw255} /></p>
                    <p id="stuffName">TSW-255</p>
                    <p id="stuffSpec" style={textBox}>AC / 17L / AL TANK</p>
                  </li>
                </a>
                </ul>
                <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                    <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt105x40} /></p>
                    <p id="stuffName">WT105x40</p>
                    <p id="stuffSpec" style={textBox}>AC / 20L</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt185x52} /></p>
                    <p id="stuffName">WT185x52</p>
                    <p id="stuffSpec" style={textBox}>AC / 40L / AL TANK</p>
                  </li>
                </a>
              </ul>
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt185x60} /></p>
                    <p id="stuffName">WT185x60</p>
                    <p id="stuffSpec" style={textBox}>AC / 1L / AL TANK</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt255x60} /></p>
                    <p id="stuffName">WT255x60</p>
                    <p id="stuffSpec" style={textBox}>AC / 17L / AL TANK</p>
                  </li>
                </a>
                </ul>
                <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                    <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt355x72} /></p>
                    <p id="stuffName">WT355x72</p>
                    <p id="stuffSpec" style={textBox}>AC / 20L</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt355x80} /></p>
                    <p id="stuffName">WT533x80</p>
                    <p id="stuffSpec" style={textBox}>AC / 40L / AL TANK</p>
                  </li>
                </a>
              </ul>
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                    <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wtc0540} /></p>
                    <p id="stuffName">WTC-0540</p>
                    <p id="stuffSpec" style={textBox}>AC / 20L</p>
                  </li>
                </a>
              </ul>
            </div>

            <div className="section">
              체결공구
            </div>
        
            <div className="stuffgroup">
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={openGear} /></p>
                    <p id="stuffName">오픈기어렌치</p>
                    <p id="stuffSpec" style={textBox}>AC / 2헤드 / 50L</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt555} /></p>
                    <p id="stuffName">WT-555</p>
                    <p id="stuffSpec" style={textBox}>AC / 3헤드 / 70L</p>
                  </li>
                </a>
              </ul>
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt610026100} /></p>
                    <p id="stuffName">전공드라이버</p>
                    <p id="stuffSpec" style={textBox}>AC / 2헤드 / 50L</p>
                  </li>
                </a>
              </ul>
            </div>
          </div>

          <div className="section">
            랜턴
          </div>
        
            <div className="stuffgroup">
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt2007} /></p>
                    <p id="stuffName">DC-990X2</p>
                    <p id="stuffSpec" style={textBox}>AC / 2헤드 / 50L</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt3007} /></p>
                    <p id="stuffName">DC-990X3</p>
                    <p id="stuffSpec" style={textBox}>AC / 3헤드 / 70L</p>
                  </li>
                </a>
              </ul>
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt3081} /></p>
                    <p id="stuffName">DC-990X2</p>
                    <p id="stuffSpec" style={textBox}>AC / 2헤드 / 50L</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt6124} /></p>
                    <p id="stuffName">DC-990X3</p>
                    <p id="stuffSpec" style={textBox}>AC / 3헤드 / 70L</p>
                  </li>
                </a>
              </ul>
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt8019} /></p>
                    <p id="stuffName">DC-990X2</p>
                    <p id="stuffSpec" style={textBox}>AC / 2헤드 / 50L</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt9002} /></p>
                    <p id="stuffName">DC-990X3</p>
                    <p id="stuffSpec" style={textBox}>AC / 3헤드 / 70L</p>
                  </li>
                </a>
              </ul>
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wtt6g1} /></p>
                    <p id="stuffName">DC-990X2</p>
                    <p id="stuffSpec" style={textBox}>AC / 2헤드 / 50L</p>
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
                    <p><img className="stuffBoxImg" src={wch1815li} /></p>
                    <p id="stuffName">DC-990X2</p>
                    <p id="stuffSpec" style={textBox}>AC / 2헤드 / 50L</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={blac1} /></p>
                    <p id="stuffName">DC-990X3</p>
                    <p id="stuffSpec" style={textBox}>AC / 3헤드 / 70L</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wt308312} /></p>
                    <p id="stuffName">DC-990X3</p>
                    <p id="stuffSpec" style={textBox}>AC / 3헤드 / 70L</p>
                  </li>
                </a>
              </ul>
            </div>



      </div>

    </>;
  }
}

export default Worthytool;