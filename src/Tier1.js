import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  handleChildClick = event => {
    this.setState({
      childColor: getRandomColor(this.state.childColor)
    })
  }

  handleParentClick = () => {
    const initial = getRandomColor();
    this.setState({
      color: initial,
      childColor: getReducedColor(initial)
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleParentClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 onClick={this.handleChildClick} color={this.state.childColor} />
        <Tier2 onClick={this.handleChildClick} color={this.state.childColor} />
      </div>
    )
  }
}
