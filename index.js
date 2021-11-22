import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Introduce from "./components/Introduce";
import Tichop from "./components/Tichop";
import Worthytool from "./components/Worthytool";
import Blueshark from "./components/Blueshark";
import Etc from "./components/Etc";
import Movie from "./components/Movie";
import Notice from "./components/Notice";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';



function App(){
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/tichop" element={<Tichop />} />
        <Route path="/blueshark" element={<Blueshark />} />
        <Route path="/worthytool" element={<Worthytool />} />
        <Route path="/etc" element={<Etc />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<h1>정확히 좀 눌러라.</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();