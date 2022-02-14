import dc990s from "./imgs/990s.png";
import bannerBlueshark from "./imgs/bannerBlueshark.jpg";

import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Brand.css';


class Blueshark extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    cutting_stone: {},
    polishing_stone: {},
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/items/?_limit=-1&populate=*&filters[brand][0]=blueshark&filters[category][1]=cutting_stone' );
      this.setState({ cutting_stone: response });
    } catch (error) {
      this.setState({ error });
    }
    try {
      const response = await axios.get('http://localhost:1337/api/items/?_limit=-1&populate=*&filters[brand][0]=blueshark&filters[category][1]=polishing_stone' );
      this.setState({ polishing_stone: response });
    } catch (error) {
      this.setState({ error });
    }
  };
    

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
      <div className="Blueshark">
      

        <div className="container">
          <div className="innerContainer1">
            <div className="category">
              <span>Home</span>
              <span>></span>
              <span>브랜드</span>
              <span>></span>
              <span>블루샤크</span>
            </div>
            <p><h1>블루샤크</h1></p>
            <div id="line" />
          </div>
        </div>

        <div className="mainBanner">
          <div className="mainBannerParents">
            <img id="mainBannerImg" src={bannerBlueshark} />
            <div id="mainBannerText">BLUESHARK</div>
          </div>
        </div>

        {/* 여기까지 MainBanner 적용*/}




        <div className="fix_width">
          <div className="section">
            절단석
          </div>
      
          <div>
            
          { this.state.cutting_stone.data && this.state.cutting_stone.data.data.map ? this.state.cutting_stone.data.data.map(
                      item => {
                        return (
                          <ul className="container0">
                          <Link to={ "/detail/" + item.id } className="stuffBoxSwitch" href="">
                            <li id="stuffBox" style={stuffBox}>
                              <p><img className="stuffBoxImg" src={"http://localhost:1337" + item.attributes.mainImage.data.attributes.url} /></p>
                              <p id="stuffName">{ item.attributes.name }</p>
                              <p id="stuffSpec" style={textBox}>{ item.attributes.mainDescription }</p>
                            </li>
                          </Link>
                        </ul>
                        );
                      }
                    ) : "" }
          </div>

          <div className="section">
            연마석
          </div>
      
          <div>
            <ul className="container0">
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                <p><img className="stuffBoxImg" src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img className="stuffBoxImg" src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                  <p><img className="stuffBoxImg" src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                <p><img className="stuffBoxImg" src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4마력 / 1L탱크 / 308L/min / 1.0MPa</p>
                </li>
              </a>
            </ul>
          </div>



      </div>

    </div>

    </>;
  }
}

export default Blueshark;