import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class ParentContain extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  handleButton = () => {
    this.inputRef.current.showMessage();
  };
  
  render() {
    return (
      <div>
        <h2>Hello from Parent</h2>
        <button onClick={this.handleButton}>Click</button>
       <ChildComponent ref={this.inputRef}/>
      </div>
    );
  }
  
}
