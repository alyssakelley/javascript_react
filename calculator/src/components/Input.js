import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

  render() {
    return (
      // this will inhert the values from the parent which is app.js
      <div className="input">
      {this.props.children}
      </div>
    )
  }
}

export default Input;
