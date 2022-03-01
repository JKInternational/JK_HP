import React from 'react';
import axios from 'axios';

import './Detail.css';
import withRouter from './util.js';


class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  

  state = {
    data: {},
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get('http://jkintl.iptime.org:10337/api/items/' + String(this.props.params.id) + '?populate=*' );
      this.setState({ data: response });
    } catch (error) {
      this.setState({ error });
    }
    if(!this.state.data.data || this.state.error) {
      alert("페이지 주소가 잘못되었습니다.");
      this.props.navigate(-1);
    }
  };



  render() {

    // if(this.state.data.data) {
    //   console.log(this.state.data.data.data.attributes.detailImage);
    //   }

    //   if(this.state.data.data) {
    //     console.log(this.state.data.data.data.attributes.mainImage);
    //     }
    
    //     if(this.state.data.data) {
    //       console.log(this.state.data.data);
    //       }

    return <>
      
        <div className='Detail'>
        
          <ul className='topContainer'>
            <li>
              <ul className='topLeft'>
                <li id='topImgLi'>
                  <img className='topImg' src={ this.state.data.data && this.state.data.data.data.attributes.mainImage.data ?
                    "http://jkintl.iptime.org:10337" + this.state.data.data.data.attributes.mainImage.data.attributes.url : "" } />
                </li>
                <li>
                { this.state.data.data && this.state.data.data.data.attributes.Spec && this.state.data.data.data.attributes.Spec.map ? 
                  <button className='spec'>
                    <h3>제품사양</h3>
                  </button>
                  : "" }
                </li>
                <li>
                  <table>
                    <tbody>
                    { this.state.data.data && this.state.data.data.data.attributes.Spec && this.state.data.data.data.attributes.Spec.map ? this.state.data.data.data.attributes.Spec.map(
                      item => {
                        return (
                          <tr>
                            <th><h4>{item[0]}</h4></th>
                            <td><h4>{item[1]}</h4></td>
                          </tr>
                        );
                      }
                    ) : "" }
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
                  <h1>{ this.state.data.data ? this.state.data.data.data.attributes.name : "" }</h1>
                </li>
                  <hr id='topLine' />
                <li>
                  <h3>{ this.state.data.data ? this.state.data.data.data.attributes.description : "" }</h3>
                </li>
              </ul>
            </li>
          </ul>
          {/* <img className='bottomImg' src={ this.state.data.data && this.state.data.data.data.attributes.detailImage.data ?
                    "http://jkintl.iptime.org:10337" + this.state.data.data.data.attributes.detailImage.data[0].attributes.url : ""  } />
          <img className='bottomImg' src={ this.state.data.data && this.state.data.data.data.attributes.detailImage.data ?
                    "http://jkintl.iptime.org:10337" + this.state.data.data.data.attributes.detailImage.data[1].attributes.url : ""  } /> */}

                  { this.state.data.data && this.state.data.data.data.attributes.detailImage.data ? 
                  this.state.data.data.data.attributes.detailImage.data.map(
                      item => {
                        return (
                          <>
                          <img className='bottomImg' src={"http://jkintl.iptime.org:10337" + item.attributes.url} />
                          <br></br><br></br><br></br><br></br>
                          </>
                          );
                      }
                    ) : "" }

          </div>


    </>;
  }
}

export default withRouter(Detail);