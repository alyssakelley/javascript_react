//import React from 'react';
import React, { Component } from 'react';
import Button from './components/Button'; 
import Input from './components/Input'; 
import ClearButton from './components/ClearButton'
import './App.css';

class App extends Component {

  // container for holding the states together

  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumebr: "",
      currentNumber: "",
      operator: "",
    };
  }

  // function to add the number from the button to the input box to compute the arithmetic
  addtoInput = val => {
    // add the value to the state
    this.setState({ input: this.state.input + val });
  };

  addZerotoInput = val => {
    // if this.state.input is not empty, then add zero bc you dont want the first number of a number input to be 0

    if (this.state.input !== "")
    {
      // meaning another number has already been added in to this input string
      this.setState({input: this.state.input + val});
    }  
  };

  addDecimal = val => {
    // only add decimal if there is no decimal already there in the input string
    // indexOf searched the entire string for the . and returns -1 to indicate false to show that it is not in the string
    if (this.state.input.indexOf(".") === -1) // this means 
    {
      this.setState({input: this.state.input + val })
    }
  };

  clearInput = () => {
    // clears it all
    this.setState({ input: ""});
  };

  divide = val => {
    if (this.state.input !== "")
    {
      this.setState({input: this.state.input / val});
    }  
  };

add = () => {
  // storing the previous number in memory
  this.state.previousNumber = this.state.input;
  this.setState({ input: ""});
  this.state.operator = "plus";
};

substract = () => {
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "substract";
};

multiply = () => {
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "multiply";
};

divide = () => {
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "divide";
};

evaluate = () => {
  this.state.currentNumber = this.state.input;
  if (this.state.operator == "plus")
  {
    this.setState({
      input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
    });
  }
  else if (this.state.operator == "substract")
  {
    this.setState({
      input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
    });
  }
  else if (this.state.operator == "multiply")
  {
    this.setState({
      input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
    });
  }
  else if (this.state.operator == "divide")
  {
    this.setState({
      input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
    });
  }
}


  render()
  {
    return (
    <div className="App">
      <div className="calc-wrapper">

        <div className="row">
          <Input>{this.state.input}</Input>
        </div> 
        <div className="row">
          <Button handleClick={this.addtoInput}>7</Button>
          <Button handleClick={this.addtoInput}>8</Button>
          <Button handleClick={this.addtoInput}>9</Button>
          <Button handleClick={this.divide}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addtoInput}>4</Button>
          <Button handleClick={this.addtoInput}>5</Button>
          <Button handleClick={this.addtoInput}>6</Button>
          <Button handleClick={this.multiply}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addtoInput}>1</Button>
          <Button handleClick={this.addtoInput}>2</Button>
          <Button handleClick={this.addtoInput}>3</Button>
          <Button handleClick={this.add}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.addZerotoInput}>0</Button>
          <Button handleClick={this.evaluate}>=</Button>
          <Button handleClick={this.substract}>-</Button>
        </div>

        <div className="row">
          <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
        </div>

      </div>  
    </div>
    );
  }
}

export default App;
