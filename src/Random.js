import React, { Component } from 'react';
// import Nidhi from './Nidhi';
export default class Random extends Component {
  random() {
    alert('i was clicked');
  }
  render() {
    const bar = <h1> hellow </h1>;
    return (
      <h1 style={ { color: 'blue' } } onClick={this.random}>
        This is title
        { bar }
      </h1>
    );
  }
}
