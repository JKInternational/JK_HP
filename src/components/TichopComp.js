import bannerTichopComp from "./imgs/bannerTichopComp1.jpg";
import bannerTichopCompMobile from "./imgs/bannerTichopCompMobile1.jpg";

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Brand.css";

class TichopComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      page: 1,
      sectionTitles: {}, // 카테고리의 한국어명을 저장할 객체
      category: "", // 동적으로 설정될 카테고리 값
      scrolled: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.fetchData(); // 카테고리 불러오기
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  async fetchData() {
    try {
      this.setState({ loading: true });
      const { category } = this.state;
      let apiUrl = `http://jkintl.co.kr:10337/api/items/?populate=*&filters[brand][0]=tichop_comp&pagination[page]=1&pagination[pageSize]=200`;
      if (category) {
        apiUrl += `&filters[category][0]=${category}`;
      }
      console.log("API URL:", apiUrl); // 확인용 출력
      const response = await axios.get(apiUrl);
      if (response && response.data && response.data.data) {
        // 데이터를 받아온 후, 카테고리별로 분류하여 저장
        const sectionTitles = {};
        response.data.data.forEach((item) => {
          const category = item.attributes.categoryKorean;
          if (!sectionTitles[category]) {
            sectionTitles[category] = [];
          }
          sectionTitles[category].push(item);
        });

        this.setState({
          sectionTitles,
          loading: false,
        });
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      this.setState({ error, loading: false });
    }
  }

  handleScroll() {
    const { loading } = this.state;
    if (!loading && this.state.scrolled) {
      // 스크롤 이벤트 핸들링
    }
  }

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
      margin: "0px",
      padding: "0px",
    };

    const { sectionTitles } = this.state;

    return (
      <div className="brandItems">
        <div className="container">
          <div className="innerContainer1">
            <div className="category">
              <span>Home</span>
              <span>></span>
              <span>브랜드</span>
              <span>></span>
              <span>티찹</span>
              <span>></span>
              <span>컴프레서</span>
            </div>
            <p>
              <h1>티찹 컴프레서</h1>
            </p>
            <div id="line" />
          </div>
        </div>

        <div className="mainBanner">
          <div className="mainBannerParents">
            <img id="mainBannerImg" src={bannerTichopComp} />
          </div>
          <div className="mainBannerParentsMobile">
            <img id="mainBannerImgMobile" src={bannerTichopCompMobile} />
          </div>
        </div>

        <div className="fix_width">
          {Object.entries(sectionTitles).map(([category, items]) => (
            <div key={category} className="brandItems1">
              <div className="section">{category}</div>
              {/* 카테고리 한국어명으로 변경 */}
              <div className="stuffgroup">
                {items.map((item, index) => (
                  <ul key={index} className="container0">
                    <Link
                      to={"/detail/" + item.id}
                      className="stuffBoxSwitch"
                      href=""
                    >
                      <li id="stuffBox" style={stuffBox}>
                        <p>
                          <img
                            className="stuffBoxImg"
                            src={
                              "http://jkintl.co.kr:10337" +
                              item.attributes.indexImage.data.attributes.url
                            }
                            alt={item.attributes.name} // alt 속성 추가
                          />
                        </p>
                        <p id="stuffName">{item.attributes.name}</p>
                        <p id="stuffSpec" style={textBox}>
                          {item.attributes.mainDescription}
                        </p>
                      </li>
                    </Link>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TichopComp;
