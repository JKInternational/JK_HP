import React, { useEffect } from "react";
import { ReactComponent as KakaotalkLogo } from "./imgs/kakaotalk_logo.svg";
import "./ShareBtns.css";

const KakaoShareButton = (props) => {
  useEffect(() => {
    createKakaoButton(props.itemInfo || {});
  }, [props]);

  const createKakaoButton = (itemInfo) => {
    const title =
      itemInfo.data &&
      itemInfo.data.attributes &&
      itemInfo.data.attributes.name;
    // ? itemInfo.data.attributes.name
    // : "no name yet";

    const description =
      itemInfo.data &&
      itemInfo.data.attributes &&
      itemInfo.data.attributes.description;
    // ? itemInfo.data.attributes.description
    // : "no name yet";

    const dataImg =
      itemInfo.data &&
      itemInfo.data.attributes &&
      itemInfo.data.attributes.mainImage
        ? "http://jkintl.iptime.org:10337" +
          itemInfo.data.attributes.mainImage.data.attributes.url
        : "";

    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init("2d482b470884abbd4351fd5f2775cb64");
      }

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: title,
          description: description,
          imageUrl: dataImg, // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "웹으로 볼께요",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: "앱으로 볼께요",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  return (
    <div className="kakao-share-button">
      <button id="kakao-link-btn">
        <KakaotalkLogo className="icon" />
      </button>
    </div>
  );
};

export default KakaoShareButton;
