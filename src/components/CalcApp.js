import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      value: '',
      store: '0',
      lastNum: '',
      operator: 1,
    };
  }

  setTemp(str) {
    const temp = this.state.value + str;
    this.setState({ value: temp });
    if (this.state.operator > 10) {
      this.setState({ store: this.state.lastNum });
    }
  }
  resetState() {
    // TODO
    this.setState({ value: '' });
    this.setState({ store: '0' });
    this.setState({ lastNum: '' });
    this.setState({ operator: 1 });
  }

  update(op) {
    let num = 0;
    const opp = this.state.operator;
    const numTemp = this.state.value ? Number(this.state.value) : Number(this.state.lastNum);
    if (!this.state.value && op % 10 !== 5) {
      this.setState({ operator: op % 10 === 5 ? this.state.operator : op });
      return;
    }
    if (op === 5) {
      this.setState({ operator: (this.state.operator + 10) });
    } else {
      this.setState({ operator: op });
    }
    console.log(opp);
    if (opp % 10 === 1) {
      num = Number(this.state.store) + numTemp;
    } else if (opp % 10 === 2) {
      num = Number(this.state.store) - numTemp;
    } else if (opp % 10 === 3) {
      num = Number(this.state.store) * numTemp;
    } else if (opp % 10 === 4) {
      num = Number(this.state.store) / numTemp;
    }
    this.setState({ store: num.toString() });
    this.setState({ lastNum: this.state.value ? this.state.value : this.state.lastNum });
    this.setState({ value: '' });
  }



  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.value ? this.state.value : this.state.store}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.update(4).bind(this)}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.setTemp('7').bind(this)}>7</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.setTemp('8').bind(this)}>8</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.setTemp('9').bind(this)}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.update(3).bind(this)}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.setTemp('4').bind(this)}>4</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.setTemp('5').bind(this)}>5</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.setTemp('6').bind(this)}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.update(2).bind(this)}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.setTemp('1').bind(this)}>1</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.setTemp('2').bind(this)}>2</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.setTemp('3').bind(this)}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.update(1).bind(this)}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={() => this.setTemp('0').bind(this)}>0</CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator"  onClick={() => this.update(5).bind(this)}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
