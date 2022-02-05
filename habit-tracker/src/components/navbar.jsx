import React, { Component, PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    console.log('navbar');
    return (
      <header className='navbar'>
        <span>Habit Tracker</span>
        <span className='navbar-count'>{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Navbar;
