import main_1_886 from "./imgs/main_1_886.png";
import drills from "./imgs/drills.png";
import cleanDisk from "./imgs/cleanDisk.png";
import { ReactComponent as TitleLogo } from "./imgs/title_logo.svg";
import React from "react";
import "./Introduce.css";

class Introduce extends React.Component {
  render() {
    return (
      <>
        <div className="Introduce">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>JK인터내셔널</span>
                <span>></span>
                <span>회사소개</span>
              </div>
              <p>
                <h1>회사소개</h1>
              </p>
              <div id="line" />
              <div className="innerContent">
                <div className="innerContent1">
                  <ul className="innerContent2">
                    <li>
                      <span id="jk">JK인터내셔널</span>은 2014년 창사이래
                      오늘날까지 각종 산업용재 및 작업공구 등 다양한 제품을
                      생산하여 공급하고 있으며, 300여 곳의 거래처로부터 그
                      품질과 기술을 높이 평가받고 있습니다.
                    </li>
                    <br />
                    <li>
                      신생업체만의 젊음과 열정을 가지고 고객 여러분을 위하여
                      최상의 품질과 최고의 제품을 공급함은 물론 당사에서 판매한
                      모든 제품에 대하여 고객이 만족할 때까지 에프터서비스를
                      해드릴 것을 약속드립니다.
                    </li>
                    <br />
                    <li>
                      끊임없는 신상품 개발을 통해 회사의 성장과 고객의 만족을
                      도모하는 기업이 되겠습니다.
                    </li>
                    <li id="logoPlace">
                      <TitleLogo id="logo" width="177" height="23" />
                    </li>
                  </ul>
                  <ul className="innerContainer2">
                    <li>
                      <img src={main_1_886} />
                    </li>
                    <li>
                      <img src={drills} />
                    </li>
                    <li>
                      <img src={cleanDisk} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Introduce;
