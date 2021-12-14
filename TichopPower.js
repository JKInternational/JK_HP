import tdm40plus from "./imgs/tdm40plus.png";
import trd18bl from "./imgs/trd18bl.png";
import tcs4552 from "./imgs/tcs4552.png";
import wcp25 from "./imgs/wcp25.png";
import tlb1620 from "./imgs/tlb1620.png";
import tlb1822 from "./imgs/tlb1822.png";
import tlb1840 from "./imgs/tlb1840.png";
import tlb1860 from "./imgs/tlb1860.png";
import tsd16bl from "./imgs/tsd16bl.png";
import tsd16blb from "./imgs/tsd16blb.png";
import tid16bl from "./imgs/tid16bl.png";
import tid16blb from "./imgs/tid16blb.png";
import thd18bl from "./imgs/thd18bl.png";
import thd18blb from "./imgs/thd18blb.png";
import tid18bl from "./imgs/tid18bl.png";
import tid18blb from "./imgs/tid18blb.png";
import tag18bl from "./imgs/tag18bl.png";
import tcs165bl from "./imgs/tcs165bl.png";
import tjs18b from "./imgs/tjs18b.png";
import tsa18 from "./imgs/tsa18.png";
import bannerTichop from "./imgs/bannerTichop.jpg";
import React from 'react';
import './Brand.css';


class TichopPower extends React.Component {


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
      <div className="TichopPower">
      

        <div className="container">
          <div className="innerContainer1">
            <div className="category">
              <span>Home</span>
              <span>></span>
              <span>브랜드</span>
              <span>></span>
              <span>티찹</span>
              <span>></span>
              <span>전동공구</span>
            </div>
            <p><h1>티찹 전동공구</h1></p>
            <div id="line" />
          </div>
        </div>

        <div className="mainBanner">
          <div className="mainBannerParents">
            <img id="mainBannerImg" src={bannerTichop} />
            <div id="mainBannerText">TICHOP</div>
          </div>
        </div>

        {/* 여기까지 MainBanner 적용*/}




        <div className="fix_width">

          <div id="toTichop">
            <button id="linkTichop" type="button">
              <a href='tichopcomp'>
                티찹 컴프레서 보러 가기!
              </a>
            </button>
          </div>



          <div className="tichopPower1">

            <div className="section">
              체결공구
            </div>
        
            <div className="stuffgroup">
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tsd16bl} /></p>
                    <p id="stuffName">TSD-16BL</p>
                    <p id="stuffSpec" style={textBox}>스크류드라이버 / 16V / 2.0Ah / 2단 속도</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tsd16blb} /></p>
                    <p id="stuffName">TSD-16BL-B</p>
                    <p id="stuffSpec" style={textBox}>스크류드라이버 / 16V / 2.0Ah / 2단 속도 / 베어툴</p>
                  </li>
                </a>
                </ul>
                <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                    <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tid16bl} /></p>
                    <p id="stuffName">TID-16BL</p>
                    <p id="stuffSpec" style={textBox}>임팩트드릴 / 16V / 2.0Ah / 2단 속도</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tid16blb} /></p>
                    <p id="stuffName">TID-16BL-B</p>
                    <p id="stuffSpec" style={textBox}>임팩트드릴 / 16V / 2.0Ah / 2단 속도 / 베어툴</p>
                  </li>
                </a>
              </ul>
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={thd18bl} /></p>
                    <p id="stuffName">THD-18BL</p>
                    <p id="stuffSpec" style={textBox}>해머드라이버 / 18V / 2.2Ah / 2단 속도</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={thd18blb} /></p>
                    <p id="stuffName">THD-18BL-B</p>
                    <p id="stuffSpec" style={textBox}>해머드라이버 / 18V / 2.2Ah / 2단 속도 / 베어툴</p>
                  </li>
                </a>
                </ul>
                <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                    <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tid18bl} /></p>
                    <p id="stuffName">TID-18BL</p>
                    <p id="stuffSpec" style={textBox}>임팩트드릴 / 18V / 2.2Ah / 2단 속도</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tid18blb} /></p>
                    <p id="stuffName">TID-18BL-B</p>
                    <p id="stuffSpec" style={textBox}>임팩트드릴 / 18V / 2.2Ah / 2단 속도 / 베어툴</p>
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
                    <p><img className="stuffBoxImg" src={tag18bl} /></p>
                    <p id="stuffName">TAG-18BL</p>
                    <p id="stuffSpec" style={textBox}>충전그라인더 / 18V / 4.0Ah / 2단 속도</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tcs165bl} /></p>
                    <p id="stuffName">TCS-165BL</p>
                    <p id="stuffSpec" style={textBox}>충전원형톱 / 18V / 4.0Ah</p>
                  </li>
                </a>
                </ul>
                <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                    <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tsa18} /></p>
                    <p id="stuffName">TSA-18</p>
                    <p id="stuffSpec" style={textBox}>충전컷소 / 18V / 6.0Ah</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tjs18b} /></p>
                    <p id="stuffName">TJS-18-B</p>
                    <p id="stuffSpec" style={textBox}>충전직소 / 18V / 베어툴</p>
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
                    <p><img className="stuffBoxImg" src={trd18bl} /></p>
                    <p id="stuffName">TRD-18BL</p>
                    <p id="stuffSpec" style={textBox}>충전로터리해머드릴 / 18V / 6.0Ah / 3모드</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tcs4552} /></p>
                    <p id="stuffName">TCS-4516<br></br>TCS-5218</p>
                    <p id="stuffSpec" style={textBox}>엔진톱 / 2행정 / 45cc 16" / 52cc 18"</p>
                  </li>
                </a>
                </ul>
                <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                    <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={wcp25} /></p>
                    <p id="stuffName">WCP-25</p>
                    <p id="stuffSpec" style={textBox}>충전전동전지가위 / 16V / 2.0Ah / 2모드</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tdm40plus} /></p>
                    <p id="stuffName">TDM-40 plus</p>
                    <p id="stuffSpec" style={textBox}>트리플측정기 / 거리측정기 / 금속탐지기 / 수평기</p>
                  </li>
                </a>
              </ul>
            </div>

            <div className="section">
              악세사리
            </div>
        
            <div className="stuffgroup">
              <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tlb1822} /></p>
                    <p id="stuffName">TLB-1822</p>
                    <p id="stuffSpec" style={textBox}>배터리 / 18V / 2.2Ah / 잔량 체크</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tlb1840} /></p>
                    <p id="stuffName">TLB-1840</p>
                    <p id="stuffSpec" style={textBox}>배터리 / 18V / 4.0Ah / 잔량 체크</p>
                  </li>
                </a>
                </ul>
                <ul className="container0">
                <a className="stuffBoxSwitch" href="">
                    <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tlb1860} /></p>
                    <p id="stuffName">TLB-1860</p>
                    <p id="stuffSpec" style={textBox}>배터리 / 18V / 6.0Ah / 잔량 체크</p>
                  </li>
                </a>
                <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                    <p><img className="stuffBoxImg" src={tlb1620} /></p>
                    <p id="stuffName">TLB-1620</p>
                    <p id="stuffSpec" style={textBox}>배터리 / 16V / 2.0Ah</p>
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

export default TichopPower;