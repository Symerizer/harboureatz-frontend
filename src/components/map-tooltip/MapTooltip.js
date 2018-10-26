import React, { Component } from 'react'
import './MapTooltip.css'

export default class MapTooltip extends Component {

  componentDidMount () {

  }

  handleClick = async (e) => {
    e.preventDefault()
    console.log(this.props)
    const response = await fetch(`https://saber-reaction.glitch.me/restaurants/${this.props.id}`, {
      method: "POST",
    })
    const json = await response.json()
    console.log(json)
  }

  render () {
    return (
      <div className="component-MapTooltip">
        <p onClick={this.handleClick} className="tooltipLink">{this.props.text}</p>
      </div>
    )
  }
}
