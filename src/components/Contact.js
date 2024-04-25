import phone1 from "./imgs/phone1.svg";
import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <>
        <div className="Contact">
          <div className="container">
            <div className="innerContainer1">
              <div className="category">
                <span>Home</span>
                <span>></span>
                <span>고객지원</span>
                <span>></span>
                <span>찾아오시는 길</span>
              </div>
              <p>
                <h1>찾아오시는 길</h1>
              </p>
              <div id="line" />
            </div>

            <ul className="adress">
              <li className="telAlign2">
                <div className="tel">Tel.</div>
                <span className="telAlign1" id="bold">
                  <a href="tel:0319733788">031-973-3788</a>
                  <img
                    className="phoneIcon1"
                    src={phone1}
                    width="12"
                    height="auto"
                  />
                </span>
                (AS문의)
              </li>
              <br />
              <li>
                Fax. <span id="bold">031-979-3788</span>
              </li>
              <br />
              <li>
                E-mail. <span id="bold">j-kinternational@naver.com</span>
              </li>
              <br />
              <li>
                신주소.
                <span id="bold">
                  경기도 고양시 고봉로658번길 61-36 나동 JK인터내셔널
                </span>
              </li>
              <br />
              <li id="blank">
                (구주소. 경기도 고양시 일산동구 성석동 1075-125 나동
                JK인터내셔널)
              </li>
              <li>
                <iframe
                  id="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1876.7014258163617!2d126.79196606163406!3d37.71444308923019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c91c2d7d3763f%3A0xb4db1a80099ac847!2z6rK96riw64-EIOqzoOyWkeyLnCDsnbzsgrDrj5nqtawg7ISx7ISd64-ZIDEwNzUtMTI1!5e0!3m2!1sko!2skr!4v1638171982653!5m2!1sko!2skr"
                  allowfullscreen=""
                  loading="lazy"
                />
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
