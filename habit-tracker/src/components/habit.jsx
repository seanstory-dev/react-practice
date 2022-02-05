import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = (e) => {
    console.log(e);
    // setState로 전체적인 state를 업데이트해줘야 리액트가 render 함수를 자동으로 호출할 수 있다.
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  render() {
    return (
      <li className='habit'>
        <span className='habit-name'>Reading</span>
        <span className='habit-count'>{this.state.count}</span>
        <button className='habit-button habit-increase' onClick={this.handleIncrement}>
          <i className='fas fa-plus-square'></i>
        </button>
        <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
          <i className='fas fa-minus-square'></i>
        </button>
        <button className='habit-button habit-delete'>
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
