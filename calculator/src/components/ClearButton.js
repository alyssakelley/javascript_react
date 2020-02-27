import React, { Component } from 'react';
import './ClearButton.css';

class ClearButton extends Component {

  render() {
    return (
      // this will inhert the values from the parent which is app.js
      <div className="clear-button"
      	onClick={() => this.props.handleClear(this.props.children)}
      >
      {this.props.children}
      </div>
    )
  }
}

export default ClearButton;
