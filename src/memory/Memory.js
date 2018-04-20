import React, { Component } from 'react';
import './style/memory.css'

class Memory extends Component {
  constructor(){
    super()
    this.style = {
      memory: "memory",
      grid: "grid",
      count: "x3",
    }
  }

  renderCards(){
    return this.props.cards.map(function(card) {
      return card;
    })
  }

  render() {
    return (
      <div className={this.style.memory}>
        <div className={this.style.grid + "-" + this.style.count}>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default Memory;
