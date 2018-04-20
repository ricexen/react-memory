import React, { Component } from 'react';
import './style/card.css'

class Card extends Component {

  constructor(){
    super()
    this.style = {
      card: "card",
      front: "front",
      back: "back",
    }
  }

  getFront(){
    return require('./img/'+this.props.imgFront)
  }
  getBack(){
    return require('./img/'+this.props.imgBack)
  }

  render() {
    return (
      <div className={this.style.card} id={this.id}>
        <div className={this.style.front}>
          <img src={this.getFront()}/>
        </div>
        <div className={this.style.back}>
          <img src={this.getBack()}/>
        </div>
      </div>
    );
  }
}

export default Card;
