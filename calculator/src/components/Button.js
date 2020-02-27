import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  // a react method to make the buttons for operators light pink
  isOperator = val => {
    return !isNaN(val)  || val === "." || val === "="; // !isNaN means if it is not a number, then return the value inside
  };

  render() {
    return (
      // this is going to return pass in the props chidren to the value and if it is 
      // true (number or decision or =) then we want to add nothing, otherwise we want it to be of class operator
      // so we can specifically style it
      <div 
        className={`Button ${this.isOperator
          (this.props.children) ? "" : "operator"}`}
          onClick={() => this.props.handleClick
            (this.props.children)}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Button;
 