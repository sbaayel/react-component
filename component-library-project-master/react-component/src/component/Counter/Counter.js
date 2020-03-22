import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.startValue
    };
  }
  increaseCount = () => {
    let newCount = this.state.count + this.props.value
    this.setState({
      count: newCount
    })
  };
  decreaseCount = () => {
    let newCount = this.state.count - this.props.value;
    this.setState({
      count: newCount
    })
  };
  render() {
    return (
      < div >
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.state.count < this.props.maxValue && this.increaseCount}>+</button>
        <button onClick={this.state.count > this.props.minValue && this.decreaseCount}>-</button>
      </div >
    );
  }
}
export default Counter;