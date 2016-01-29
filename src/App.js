import React, { Component } from 'react';
import Random from './Random';

export default class App extends Component {
  render() {
    return (
      <div className="commentBox">
          <Random inputA={5} inputB={6} />
          Hello, world! I am a CommentBox.
      </div>
    );
  }
}
