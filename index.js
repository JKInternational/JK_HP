import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Introduce from "./components/Introduce";
import Tichop from "./components/Tichop.js";
import Worthytool from "./components/Worthytool.js";
import Blueshark from "./components/Blueshark";
import Etc from "./components/Etc";
import Movie from "./components/Movie";
import Notice from "./components/Notice";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';



function App(){
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/"><Main /></Route>
        <Route path="/introduce"><Introduce /></Route>
        <Route path="/tichop"><Tichop /></Route>
        <Route path="/blueshark"><Blueshark /></Route>
        <Route path="/worthytool"><Worthytool /></Route>
        <Route path="/etc"><Etc /></Route>
        <Route path="/movie"><Movie /></Route>
        <Route path="/notice"><Notice /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/"><h1>정확히 좀 눌러라.</h1></Route>
      </Switch>
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
