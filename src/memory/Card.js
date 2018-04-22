import React, { Component } from 'react';
import './style/card.css'

class Card extends Component {
  style = {
    card: "card",
    front: "front",
    back: "back",
  }

  state = {
    flipped: false
  }

  constructor(props){
    super(props)
    this.flip = this.flip.bind(this)
    this.key = Card.ID_COUNTER++;
  }

  getFront(){
    return require('./img/'+this.props.imgFront)
  }
  getBack(){
    return require('./img/'+(this.props.imgBack?this.props.imgBack:Card.defaultProps.imgBack))
  }

  getAlt(){
    return Card.defaultProps.alt
  }

  flip(){
    const currentState = this.state.flipped
    this.setState({flipped: !currentState})
  }


  render() {
    return (
      <div key={this.key.toString()} className={this.style.card + (this.state.flipped ? ' flipped' : '')} onClick={this.flip} title="flip">
        <div className={this.style.front} alt={this.getAlt()}>
          <img src={this.getFront()}/>
        </div>
        <div className={this.style.back}>
          <img src={this.getBack()} alt={this.getAlt()}/>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  imgBack: 'back.svg',
  alt: 'card'
}

Card.ID_COUNTER = 1

export default Card;
