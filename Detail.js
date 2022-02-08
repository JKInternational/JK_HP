import React from 'react';
import axios from 'axios';

import tsd16bltop from "./imgs/tsd16bltop.jpg";
import './Detail.css';
import withRouter from './util.js';


class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.params = {id : -1}
  }

  state = {
    items: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/items/2');
      this.setState({ items: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {

    const { error, item } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    console.log(this.props.params)
    if(this.props.params.id) {
      this.params.id = this.props.params.id;
    }

    var tableData = [{"title":"a", "desc":"1"}, {"title":"b","desc":"2"}]

      return <>
      
        <div className="App">
          <ul>
            {this.state.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
        
        <div className='Detail'>
        <h1>{this.params.id}</h1>
          <ul className='topContainer'>
            <li>
              <ul className='topLeft'>
                <li id='topImgLi'>
                  <img className='topImg' src={tsd16bltop} />
                </li>
                <li>
                  <button className='spec'>
                    <h3>제품사양</h3>
                  </button>
                </li>
                <li>
                  <table>
                    <tbody>
                      {tableData.map(item => {
                        return (
                          <tr>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </li>
                <li>
                  <button className='spec'>
                    <h3>제품이미지</h3>
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <ul className='topRight'>
                <li>
                  <h1>TSD-16BL</h1>
                </li>
                  <hr id='topLine' />
                <li>
                  <h3>16V 스크루 드릴 드라이버</h3>
                </li>
              </ul>
            </li>
          </ul>
          <img className='bottomImg' src={tsd16bltop} />

          </div>


    </>;
  }
}

export default withRouter(Detail);