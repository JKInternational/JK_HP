import phone2 from "./imgs/phone2.svg";
import { ReactComponent as FooterLogo } from "./imgs/footer_logo.svg";
import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footerBack">
          <div className="footer">
            <ul className="information">
              <li>
                <h5>JK인터내셔널</h5>
              </li>
              <li>
                <h5>사업자 등록번호 212-26-29750</h5>
              </li>
              <li>
                <h5>
                  경기도 고양시 일산동구 고봉로 658번길 61-36, 나동(성석동)
                </h5>
              </li>
              <li className="telAlign">
                <h5>
                  <a href="tel:0319733788">Tel. 031-973-3788</a>
                  <img
                    className="phoneIcon2"
                    src={phone2}
                    width="10"
                    height="auto"
                  />
                  / Fax. 031-979-3788
                </h5>
              </li>
              <li>
                <h5>E-mail. j-kinternational@naver.com</h5>
              </li>
              <li>
                <Link to="/">
                  <FooterLogo width="204" height="26" />
                </Link>
              </li>
              <li>
                <h5>ⓒ JKinternational. all rights reserved.</h5>
              </li>
            </ul>
            <div className="sitemap">
              <ul className="sitemap1">
                <li>
                  <h4>JK인터내셔널</h4>
                </li>
                <li>
                  <a href="/introduce">
                    <h5>회사소개</h5>
                  </a>
                </li>
              </ul>
              <ul className="sitemap2">
                <li>
                  <h4>브랜드</h4>
                </li>
                <li>
                  <a href="/tichoppower">
                    <h5>티찹 전동공구</h5>
                  </a>
                </li>
                <li>
                  <a href="/tichopcomp">
                    <h5>티찹 컴프레서</h5>
                  </a>
                </li>
                <li>
                  <a href="/blueshark">
                    <h5>블루샤크</h5>
                  </a>
                </li>
                <li>
                  <a href="/worthytool">
                    <h5>워디툴</h5>
                  </a>
                </li>
              </ul>
              <ul className="sitemap3">
                <li>
                  <h4>제품리뷰</h4>
                </li>
                <li>
                  <a href="/movie">
                    <h5>동영상 리뷰</h5>
                  </a>
                </li>
              </ul>
              <ul className="sitemap4">
                <li>
                  <h4>공지사항</h4>
                </li>
                <li>
                  <a href="/notice">
                    <h5>소식</h5>
                  </a>
                </li>
              </ul>
              <ul className="sitemap5">
                <li>
                  <h4>고객지원</h4>
                </li>
                <li>
                  <a href="/leaflet">
                    <h5>전단지</h5>
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <h5>찾아오시는 길</h5>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
