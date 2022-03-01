import title_logo from './title_logo.png';
import searchBtn from './search_btn.png';
import mainEdgeUp from './mainEdgeUp.png';
import mainEdgeDown from './mainEdgeDown.png';
import ham from './hamburger.png';
import spriteLeft from './spriteLeft.png';
import spriteRight from './spriteRight.png';
import dc990s from './990s.png';
import main_1_886 from './main_1_886.png'
import footer_logo from './footer_logo.png';
import youtube_logo from './youtube_logo.png';
import React from 'react';
import YouTube from 'react-youtube';
import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickEvent = this.handleClickEvent.bind(this);
    }

    handleClickEvent() {
        const element = document.querySelector('.slides')
            if(element) {
                element.style.transform = 'translate(100vw)'
            } else {
                //alert("error! no slides")
                //runs if element isn't ready
            }
    }
    /*
    componentDidMount() {
        this is function that intended to run after dom is rendred,
        but in practically, it is executed duing dom is rendering.
        do not use this function to add eventhandler.
    }
    */

  render() {
    const opts = {
      height: '130',
      width: '214',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

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
  <div className="App">

        <div className="nav">
          <div className="navbar_logo">
            <a href="http://www.naver.com"><img src={title_logo} /></a>
          </div>

          <ul className="navbar_menu">
            <li className="navbar_menu1">
              <button className="dropdownBtn"><h4>JK~]~D~B~E~T~D~P</h4></button>
              <div className="dropdownContent">
                <a href="#">~Z~L~B~F~L~\</a>
              </div>
              </li>
            <li className="navbar_menu1">
              <button className="dropdownBtn"><h4>~L~^~\~S~\</h4></button>
              <div className="dropdownContent">
                <a href="#">~K찹</a>
                <a href="#">~T루~C~A</a>
                <a href="#">~[~L~T~T~H</a>
                <a href="#">기~C~@</a>
              </div>
            </li>
            <li className="navbar_menu1">
              <button className="dropdownBtn"><h4>| ~\~R~H리뷰</h4></button>
              <div className="dropdownContent">
                <a href="#">~O~Y~X~A~C~A리뷰</a>
              </div>
            </li>
            <li className="navbar_menu1">
              <button className="dropdownBtn"><h4>공~@~B~U</h4></button>
              <div className="dropdownContent">
                <a href="#"></a>
              </div>
            </li>
            <li className="navbar_menu1">
              <button className="dropdownBtn"><h4>| ~]~@~[~P</h4></button>
              <div className="dropdownContent">
                <a href="#">찾~U~D~X~K~\~J~T길</a>
              </div>
            </li>
          </ul>

          <div className="navbar_search">
            <input type="text" placeholder="| ~\~R~H 찾기"/>
            <button id="searchBtn"><img src={searchBtn} /></button>
          </div>
        </div>
        {/* ~W기~L~@ Navbar PC~Y~T면 */}



        <div className="navSmall">
          <div className="targetHam">
          <button className="dropdownBtn1"><img className="hamburger" src={ham} /></button>
              <div className="dropdownContentS">
                <div id="dcs1">
                  <a href="#">JK~]~D~B~E~T~D~P</a>
                    <div className="dropdownContentS1">
                      <a href="#">~Z~L~B~F~L~\</a>
                    </div>
                </div>
                <div id="dcs2">
                  <a href="#">~L~^~\~S~\</a>
                    <div className="dropdownContentS2">
                      <a href="#">~K찹</a>
                      <a href="#">~T루~C~A</a>
                      <a href="#">~[~L~T~T~H</a>
                      <a href="#">기~C~@</a>
                    </div>
                  </div>
                <div id="dcs3">
                  <a href="#">| ~\~R~H리뷰</a>
                    <div className="dropdownContentS3">
                      <a href="#">~O~Y~X~A~C~A리뷰</a>
                    </div>
                </div>
                <div id="dcs4">
                  <a href="#">공~@~B~U</a>
                    <div className="dropdownContentS4">
                      <a href="#"></a>
                    </div>
                </div>
                <div id="dcs5">
                  <a href="#">| ~]~@~[~P</a>
                    <div className="dropdownContentS5">
                      <a href="#">찾~U~D~X~K~\~J~T길</a>
                    </div>
                </div>
              </div>
            </div>
          <img className="navbar_logo_s" src={title_logo} />
          <button id="searchBtn"><img className="search_btn_s" src={searchBtn} /></button>
        </div>
        {/* ~W기~L~@ Navbar 모~T~] ~Y~T면 */}


        <div className="slideShow">
            <div className="slideShowNav">
              <a href="" className="prev"><img src={spriteLeft} /></a>
              <a href="" className="next"><img src={spriteRight} /></a>
            </div>

          <div className="slides">
            <a className="slide1" href="">
              <div><img id="edge1" srcSet={`${mainEdgeUp} 1940w`} src={mainEdgeUp} /></div>
              <div className="mainBannerBack">
                <div className="mainBannerRect">
                  <span><img id="mainBannerImg" srcSet={`${main_1_886} 1800w`} src={main_1_886} /></span>
                  <span className="mainBannerText1">
                    <p id="mainBannerText1_1">BRUSHLESS MORTORED</p>
                    <p id="mainBannerText1_2">COMPRESSOR</p>
                    <p id="mainBannerText1_3">DC-886</p>
                  </span>
                </div>
              </div>
              <div><img id="edge1" srcSet={`${mainEdgeDown} 1940w`} src={mainEdgeDown} /></div>
            </a>
            <a className="slide2" href="">
              <div><img id="edge1" srcSet={`${mainEdgeUp} 1940w`} src={mainEdgeUp} /></div>
              <div className="mainBannerBack">
                <div className="mainBannerRect">
                  <span><img id="mainBannerImg" srcSet={`${main_1_886} 1800w`} src={main_1_886} /></span>
                  <span className="mainBannerText1">
                    <p id="mainBannerText1_1">BRUSHLESS MORTORED</p>
                    <p id="mainBannerText1_2">COMPRESSOR</p>
                    <p id="mainBannerText1_3">DC-990</p>
                  </span>
                </div>
              </div>
              <div><img id="edge1" srcSet={`${mainEdgeDown} 1940w`} src={mainEdgeDown} /></div>
            </a>

          </div>{/* ~W기~L~@ MainBanner*/}
          <div className="indicator">
            <button className="btn1">1</button>
            <button className="btn2" onClick={this.handleClickEvent}>2</button>
            <button className="btn3">3</button>
          </div>

        </div>
        {/* ~W기~L~@ MainBanner Slide | ~A~Z*/}


        <div className="fix_width">
          <div className="section1">
            NEW ARRIVAL
          </div>

          <div>
            <ul className="container0">
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4~H|  / 1L~C~A / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4~H|  / 1L~C~A / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4~H|  / 1L~C~A / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4~H|  / 1L~C~A / 308L/min / 1.0MPa</p>
                </li>
              </a>
            </ul>
          </div>

          <div className="section2">
            BEST ITEM
          </div>

          <div>
            <ul className="container0">
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4~H|  / 1L~C~A / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4~H|  / 1L~C~A / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                  <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4~H|  / 1L~C~A / 308L/min / 1.0MPa</p>
                </li>
              </a>
              <a className="stuffBoxSwitch" href="">
                <li id="stuffBox" style={stuffBox}>
                  <p><img srcSet={`${dc990s} media=all and (min-width: 414px)`} src={dc990s} /></p>
                  <p id="stuffName">DC-990S</p>
                  <p id="stuffSpec" style={textBox}>4~H|  / 1L~C~A / 308L/min / 1.0MPa</p>
                </li>
              </a>
            </ul>
          </div>

          <div className="section3">
            HOT VIDEO
          </div>

          <div className="container3">
            <ul className="link1">
              <li><YouTube id="flexMovie" videoId="vkdCwT_zFo8" /></li>
              <li>
                <ul className="link1_title">
                  <li><img src={youtube_logo} width="50" height="auto" /></li>
                  <li><h4 id="hv_title1">4~]~X ~A린~T~T~J~A 리뷰</h4></li>
                </ul>
              </li>
            </ul>
            <ul className="link2_3">
              <li>
                <ul className="link2">
                  <li><YouTube videoId="oQqUjYhr31U" opts={opts} /></li>
                  <li>
                    <ul className="link2_title">
                      <li><img id="yt_logo" src={youtube_logo} width="40" height="auto" /></li>
                      <li><h6>TCS-165BL 리뷰</h6></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="link3">
                  <li><YouTube videoId="tV88tMBQhFs" opts={opts} /></li>
                  <li>
                    <ul className="link2_title">
                      <li><img id="yt_logo" src={youtube_logo} width="40" height="auto" /></li>
                      <li><h6>THD/TID-18BL 리뷰</h6></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href=""><h5 id="more">+ ~M~T보기</h5></a></li>
            </ul>
          </div>
      </div>

      <div className="footerBack">
      <div className="footer">
        <ul className="information">
          <li><h5>JK~]~D~B~E~T~D~P</h5></li>
          <li><h5>~B~W~E~^~P ~S~]~H~X 212-26-29750</h5></li>
          <li><h5>경기~O~D | ~V~Q~K~\ ~]~B~O~Y|  | ~I~\ 658~H길 61-36, ~B~X~O~Y(~D~D~]~O~Y)</h5></li>
          <li><h5>Tel. 031-973-3788 / Fax. 031-979-3788</h5></li>
          <li><h5>E-mail. j-kinternational@naver.com</h5></li>
          <li><img src={footer_logo} /></li>
          <li><h5>Copyright ~S~R JKinternational. all right reserved.</h5></li>
        </ul>
        <div className="sitemap">
          <ul className="sitemap1">
            <li><h4>JK~]~D~B~E~T~D~P</h4></li>
            <li><a href=""><h5>~Z~L~B~F~L~\</h5></a></li>
          </ul>
          <ul className="sitemap2">
            <li><h4>~L~^~\~S~\</h4></li>
            <li><a href=""><h5>~K찹</h5></a></li>
            <li><a href=""><h5>~T루~C~A</h5></a></li>
            <li><a href=""><h5>~[~L~T~T~H</h5></a></li>
          </ul>
          <ul className="sitemap3">
            <li><h4>| ~\~R~H리뷰</h4></li>
            <li><a href=""><h5>~O~Y~X~A~C~A 리뷰</h5></a></li>
          </ul>
          <ul className="sitemap4">
            <li><h4>공~@~B~U</h4></li>
            <li><a href=""><h5>~]벤~J</h5></a></li>
          </ul>
          <ul className="sitemap5">
            <li><h4>| ~]~@~[~P</h4></li>
            <li><a href=""><h5>~^~P주~U~X~J~T ~H문</h5></a></li>
            <li><a href=""><h5>문~]~X~U~X기</h5></a></li>
            <li><a href=""><h5>| ~\~R~H~T~I~V</h5></a></li>
            <li><a href=""><h5>~U~H| ~D~^~Q~W~E</h5></a></li>
          </ul>
        </div>
      </div>
      </div>
    </div>


    </>;
  }
}

export default App;