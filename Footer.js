import footer_logo from "./imgs/footer_logo.png";
import React from 'react';
import './Main.css';


class Footer extends React.Component {


  render() {


    return <>

    <div className="footerBack">

      <div className="footer">
        <ul className="information">
          <li><h5>JK인터내셔널</h5></li>
          <li><h5>사업자 등록번호 212-26-29750</h5></li>
          <li><h5>경기도 고양시 일산동고 고봉로 658번길 61-36, 나동(성석동)</h5></li>
          <li><h5>Tel. 031-973-3788 / Fax. 031-979-3788</h5></li>
          <li><h5>E-mail. j-kinternational@naver.com</h5></li>
          <li><img src={footer_logo} /></li>
          <li><h5>Copyright ⓒ JKinternational. all right reserved.</h5></li>
        </ul>
        <div className="sitemap">
          <ul className="sitemap1">
            <li><h4>JK인터내셔널</h4></li>
            <li><a href=""><h5>회사소개</h5></a></li>
          </ul>
          <ul className="sitemap2">
            <li><h4>브랜드</h4></li>
            <li><a href=""><h5>티찹</h5></a></li>
            <li><a href=""><h5>블루샤크</h5></a></li>
            <li><a href=""><h5>워디툴</h5></a></li>
          </ul>
          <ul className="sitemap3">
            <li><h4>제품리뷰</h4></li>
            <li><a href=""><h5>동영상 리뷰</h5></a></li>
          </ul>
          <ul className="sitemap4">
            <li><h4>공지사항</h4></li>
            <li><a href=""><h5>이벤트</h5></a></li>
          </ul>
          <ul className="sitemap5">
            <li><h4>고객지원</h4></li>
            <li><a href=""><h5>자주하는 질문</h5></a></li>
            <li><a href=""><h5>문의하기</h5></a></li>
            <li><a href=""><h5>제품메뉴얼</h5></a></li>
            <li><a href=""><h5>안전작업</h5></a></li>
          </ul>
        </div>
      </div>
    </div>
  </>
  };
}

export default Footer;