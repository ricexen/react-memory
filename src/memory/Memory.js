import React, { Component } from 'react';
import './style/memory.css'

class Memory extends Component {
  constructor(){
    super()
    this.style = {
      memory: "memory",
      grid: "grid",
      gridCount: "x3",
    }
    this.cards = []
    this.addCard = this.addCard.bind(this)
  }

  addCard(card){
    this.cards.push(card)
  }

  render() {
    return (
      <div className={this.style.memory}>
        <div className={this.style.grid + "-" + this.style.gridCount}>
        </div>
      </div>
    );
  }
}

export default Memory;
