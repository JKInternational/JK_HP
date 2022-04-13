import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Carousel from "./components/Carousel";
import Introduce from "./components/Introduce";
import TichopPower from "./components/TichopPower";
import TichopComp from "./components/TichopComp";
import Worthytool from "./components/Worthytool";
import Blueshark from "./components/Blueshark";
import SearchPage from "./components/SearchPage";
// import Etc from "./components/Etc";
import Movie from "./components/Movie";
import Notice from "./components/Notice";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import Robots from "./components/robots.txt";
import MobileMenuBar from "./components/MobileMenuBar";
import ScrollTop from "react-scrolltop-button";
import { ReactComponent as ToTop } from "./components/imgs/toTop.svg";

// const moveToTop = () => (document.documentElement.scrollTop = 0);

const App = () => {
  return (
    <Router>
      <Navbar />
      <MobileMenuBar />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/carousel" element={<Carousel />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/tichoppower" element={<TichopPower />} />
          <Route path="/tichopcomp" element={<TichopComp />} />
          <Route path="/blueshark" element={<Blueshark />} />
          <Route path="/worthytool" element={<Worthytool />} />
          <Route path="/searchpage" element={<SearchPage />} />
          {/* <Route path="/searchpage/:query" element={<SearchPage />} /> */}
          {/* <Route path="/etc" element={<Etc />} /> */}
          <Route path="/movie" element={<Movie />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/robots.txt" element={<Robots />} />
          <Route
            path="/:dummy"
            element={<h2>존재하지 않는 페이지입니다.</h2>}
          />
        </Routes>
      </ScrollToTop>
      <Footer />
      {/* <ScrollTop id="toTop"> */}
      <ScrollTop
        text="Top"
        distance={10}
        breakpoint={600}
        style={
          ({ backgroundColor: "white" }, { border: "0px" }, { opacity: "75%" })
        }
        className="toTop"
        speed={100}
        target={0}
        icon={<ToTop id="toTopIcon" width="40" hight="40" />}
      />
      {/* <ToTop width="177" height="23" />
      </ScrollTop> */}
      {/* <button id="toTop" type="button" onClick={moveToTop}>
        <ToTop width="40" height="40" />
      </button> */}
    </Router>
  );
};

ReactDOM.render(
  <App />,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
