import React, { Component } from 'react'
import Card from './memory/Card'
import Memory from './memory/Memory'
import './App.css'

class App extends Component {
  render() {
    var card = <Card key="1" imgFront="blue eyes.jpg"/>
    var cards = [card]
    var memory = <Memory cards={cards} />
    return (
      <div className="game">
        <h1>Memory Game</h1>
        {memory}
      </div>
    );
  }
}

export default App;
