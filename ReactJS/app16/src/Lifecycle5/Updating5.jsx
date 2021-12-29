import React, { Component } from "react";

export default class Updating5 extends Component {
  constructor(props) {
    super(props);
    console.log("I am from Constructor from Update");
    this.state={
        
        }
  }
  static getDerivedStateFromProps(state, props) {
    console.log("I am from getDerivedStateFromProps", state, props);
    
    return null
    
  }
  shouldComponentUpdate(){
      console.log("I am from shouldComponentUpdate Update")
      return true
  }
  getSnapshotBeforeUpdate(){
      console.log("I am from getSnapshotBeforeUpdate Update")
      return null
  }

  componentDidUpdate(){
    console.log("I am from componentDidUpdate Update");
  }
  render() {
      console.log("I am from Render - from Update")
    return (
      <div>
           <h2>{this.props.student}</h2>
            
      </div>
      
    );

  }
}
