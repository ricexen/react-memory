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
    this.state = {
      flipped: false
    }
    this.flip = this.flip.bind(this)
  }

  getFront(){
    return require('./img/'+this.props.imgFront)
  }
  getBack(){
    return require('./img/'+this.props.imgBack)
  }

  flip(){
    const currentState = this.state.flipped
    this.setState({flipped: !currentState})
  }

  render() {
    return (
      <div className={this.style.card + (this.state.flipped ? ' flipped' : '')} onClick={this.flip} title="flip">
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
