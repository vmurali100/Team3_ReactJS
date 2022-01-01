import React, { Component } from 'react';
export default class ChildComponent extends Component {
  showMessage = () => {
    alert('Hello');
  };
  render() {
    return (
      <div>
        <br />
        <input type="text" />
      </div>
    );
  }
}