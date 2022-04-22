import React from "react";
import styled from "styled-components";
import {
  LineShareButton,
  LineIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ShareBtns.css";
import KakaoShareButtonMount from "./Layout.js";

class ShareBtns extends React.Component {
  render() {
    const currentUrl = window.location.href;

    const URLShareButton = styled.button`
      color: white;
      cursor: pointer;
      font-weight: 600;
      background-color: brown;
      &:hover {
        background-color: skyblue;
      }
    `;

    return (
      <>
        <div className="shareIcons">
          <ul className="shareIconsList">
            <li>
              <KakaoShareButtonMount />
            </li>
            <li>
              <LineShareButton url={currentUrl}>
                <LineIcon className="icon" />
              </LineShareButton>
            </li>
            <li>
              <FacebookShareButton url={currentUrl}>
                <FacebookIcon className="icon" />
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton url={currentUrl}>
                <TwitterIcon className="icon" />
              </TwitterShareButton>
            </li>
            <li>
              <CopyToClipboard text={currentUrl}>
                <URLShareButton className="icon">URL</URLShareButton>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default ShareBtns;
