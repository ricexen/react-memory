import React, { Component } from 'react'
import Card from './memory/Card'
import Memory from './memory/Memory'

class App extends Component {
  render() {
    var memory = Memory
    var card = <Card imgFront="blue eyes.jpg" imgBack="back.jpg" />
    console.log(memory);
    memory.addCard(card)
    return (
      <div class="game">
        <h1>Memory Game</h1>
        {memory}
      </div>
    );
  }
}

export default App;
