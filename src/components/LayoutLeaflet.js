import React, { useEffect } from "react";
import KakaoShareButtonLeaflet from "./KakaoShareButtonLeaflet.js";

const LayoutLeaflet = (props) => {
  useEffect(() => {
    console.log("layout");
    console.log(props);
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="layout">
      <KakaoShareButtonLeaflet leaflet={props.leaflet} />
    </div>
  );
};

export default LayoutLeaflet;
