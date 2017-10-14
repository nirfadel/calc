import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {
  state = {displayText:'0'}

  showResult(){
    const {displayText} = this.state;
    this.setState({displayText: document.getElementsByClassName('calc-first-num')})
}
  
  render() {
    const {displayText} = this.state;
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Calculator</h1>
        </header>
        <input className="calc-first-num"/>
        <select className="calc-operations">
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
        <input className="calc-second-num"/>
        <button className="calc-equal" onClick={() => this.showResult()}>=</button>
        <div className="calc-display"></div>
      </div>
    );
  }
}

export default Calculator;
