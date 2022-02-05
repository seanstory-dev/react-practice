import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <header className='navbar'>
        <span>Habit Tracker</span>
        <span className='navbar-count'>{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Navbar;
