import React, { Component } from 'react'
import './MapTooltip.css'

export default class MapTooltip extends Component {

  handleClick = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://saber-reaction.glitch.me/restaurants/${this.props.id}`, {
      method: "POST",
    })
    const json = await response.json()
    this.props.updateRestaurantInfo(json)
  }

  render () {
    return (
      <div className="mapTooltip">
        <span onClick={this.handleClick} className="tooltipLink">{this.props.text}</span>
      </div>
    )
  }
}
