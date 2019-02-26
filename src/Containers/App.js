import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    message: null
  }

  componentDidUpdate() {

  }

  messageHandler = () => {
    axios.get('Example/hello/-1')
      .then(response => {
        console.log(response);
      })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.messageHandler}>PRESS ME!</button>
        <label>{this.state.message}</label>
      </div>
    );
  }
}

export default App;
