import React, { Component } from 'react';
import bellA from "./bell_before.jpeg";
import bellB from "./bell_after.png";

export class NewComp extends 
Component {
    styles={
        fontStyle: "italic",
        color:"purple"
      }

    constructor(props) {
      super(props)
    
      this.state = {
         message: "subscribe to DanTuts",
         sub: "subscribe",
         imageUrl: bellA
      }
    };
    
    buttonChange=()=>{
        this.setState({
            message:"hit the bell for notifications",
            sub:"subscribed"
        })
    }
    imageChange=()=>{
        this.setState({
            imageUrl: bellB,
            message:"Thank you , happy learning"
        })
    }
  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.buttonChange}>{this.state.sub}</button>
        <br />
        <img style={{width:"30px", height:"30px"}} src={this.state.imageUrl} onClick={this.imageChange} alt=''/>
      </div>
    )
  }
}

export default NewComp
