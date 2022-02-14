import React, { Component } from 'react';


class Post extends React.Component {    
    componentDidMount(){{
      let id = this.props.match.params.postId;
    }}
  render() {

      return <>
      
        <div>
          <h1>route param</h1>
        </div>


    </>;
  }
}

export default Post;