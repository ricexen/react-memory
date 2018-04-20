import React, { Component } from 'react'
import Card from './memory/Card'
import Memory from './memory/Memory'
import './App.css'

class App extends Component {
  render() {
    var memory = Memory
    var card = <Card imgFront="blue eyes.jpg" imgBack="back.jpg" />
    return (
      <div className="game">
        <h1>Memory Game</h1>
        {card}
      </div>
    );
  }
}

export default App;
