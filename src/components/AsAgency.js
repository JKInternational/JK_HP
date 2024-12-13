import React, { Component } from "react";
import axios from "axios";
import phone2 from "./imgs/phone1.svg";
import "./AsAgency.css";

class AsAgency extends Component {
  state = {
    serviceCenters: [],
    selectedId: null,
    errorMessage: "",
    kakaoReady: false,
  };

  componentDidMount() {
    axios
      .get("http://jkintl.co.kr:10337/api/agencies?populate=*")
      .then((response) => {
        const serviceCenters = response.data.data;

        console.log("Service Centers Data:", serviceCenters); // 데이터 확인 로그

        this.setState({ serviceCenters });
      })
      .catch((error) => console.error("Service center fetch error:", error));

    if (!window.kakao) {
      console.log("Kakao Maps API 로드 중...");
      const script = document.createElement("script");
      script.src =
        "https://dapi.kakao.com/v2/maps/sdk.js?appkey=2d482b470884abbd4351fd5f2775cb64&libraries=services";
      script.async = true;

      script.onload = () => {
        console.log("✅ Kakao Maps API 로드 완료.");
        this.setState({ kakaoReady: true });
      };

      script.onerror = () => {
        console.error("🚫 Kakao Maps API 로드 실패.");
      };

      document.head.appendChild(script);
    } else {
      console.log("✅ Kakao Maps API 이미 로드됨.");
      this.setState({ kakaoReady: true });
    }
  }

  handleMapClick = (address, region, id) => {
    console.log(`Button clicked: ID=${id}, Address=${address}`);

    const { selectedId } = this.state;

    if (selectedId === id) {
      this.setState({ selectedId: null });
    } else {
      if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
        axios
          .get("https://dapi.kakao.com/v2/local/search/address.json", {
            params: { query: address },
            headers: {
              Authorization: `KakaoAK bec014756336ced559c6e0cf77cdff0f`,
            },
          })
          .then((response) => {
            const result = response.data;

            if (result && result.documents.length > 0) {
              const location = {
                lat: parseFloat(result.documents[0].y),
                lng: parseFloat(result.documents[0].x),
              };

              this.setState({ selectedId: id });
              this.renderMap(location, id);
            }
          })
          .catch((error) => console.error("Address API Error:", error));
      }
    }
  };

  renderMap = (location, id) => {
    try {
      const container = document.getElementById(`kakaoMap-${id}`);

      if (container && window.kakao) {
        const options = {
          center: new window.kakao.maps.LatLng(location.lat, location.lng),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          location.lat,
          location.lng
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      }
    } catch (error) {
      console.error("지도 렌더링 오류:", error);
      this.setState({
        errorMessage: `지도 렌더링 오류: ${error.message}`,
      });
    }
  };

  renderServiceCenters() {
    const { serviceCenters, selectedId, errorMessage } = this.state;

    const groupedCenters = serviceCenters.reduce((acc, center) => {
      const { region } = center.attributes;
      if (!acc[region]) acc[region] = [];
      acc[region].push(center);
      return acc;
    }, {});

    return Object.entries(groupedCenters).map(([region, centers], index) => {
      const groupClassName =
        index % 2 === 0 ? "service-center even" : "service-center odd"; // 짝수 그룹에 'even', 홀수 그룹에 'odd' 클래스 추가

      return (
        <div key={region} className={groupClassName}>
          <h2>{region} 서비스 센터</h2>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <ul className="center-list">
            {centers.map((center) => {
              const id = center.id || center.attributes?.id;
              const name = center.attributes?.name;
              const address = center.attributes?.address;
              const phonenumber = center.attributes?.phonenumber;
              const isSelected = this.state.selectedId === id; // 선택 여부 확인

              return (
                <React.Fragment key={id}>
                  <li className="center-item">
                    <span className="agencyName">• {name}</span>
                    <div className="addressItem">
                      <span>{address}</span>

                      <button
                        className="map-btn"
                        onClick={() => this.handleMapClick(address, region, id)}
                      >
                        {isSelected ? "닫기" : "지도보기"}
                      </button>
                    </div>
                    {phonenumber && (
                      <a href={`tel:${phonenumber}`} className="phone-link">
                        <img
                          src={phone2}
                          alt="전화 아이콘"
                          className="phoneIcon"
                        />
                        {phonenumber}
                      </a>
                    )}
                  </li>

                  {isSelected && (
                    <div className="map-container">
                      <div
                        id={`kakaoMap-${id}`}
                        style={{ width: "100%", height: "400px" }}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="As">
        <div className="container">
          <div className="innerContainer1">
            <div className="category">
              <span>Home</span>
              <span>></span>
              <span>고객지원</span>
              <span>></span>
              <span>A/S대리점</span>
            </div>
            <p>
              <h1>A/S대리점</h1>
            </p>
            <div id="line" />
          </div>
        </div>
        <div className="centerGroup">{this.renderServiceCenters()}</div>
      </div>
    );
  }
}

export default AsAgency;
