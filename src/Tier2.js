import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      color: nextProps.color,
      childColor: getReducedColor(nextProps.color)
    })
  }
  handleParentClick = event => {
    event.stopPropagation();
    const initial = getRandomColor();
    this.setState({
      color: initial,
      childColor: getReducedColor(initial)
    })
    this.props.handleChildClick
  }

  handleChildClick = event => {
    event.stopPropagation();
    this.setState({
      color: this.state.color,
      childColor: getRandomColor(this.state.childColor)
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleParentClick} className="tier2" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier3 onClick={this.handleChildClick} color={this.state.childColor} />
        <Tier3 onClick={this.handleChildClick} color={this.state.childColor} />
      </div>
    )
  }
}
