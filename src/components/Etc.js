import working from "./imgs/working.png";
import React from 'react';
import './Brand.css';


class Etc extends React.Component {


  render() {

      return <>
      <div className="Etc">
      
        <img id="working" src={working} />
        <div>노력하고 있습니다.</div>

      </div>

    </>;
  }
}

export default Etc;