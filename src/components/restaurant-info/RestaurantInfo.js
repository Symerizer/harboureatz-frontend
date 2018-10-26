import React, { Component } from 'react'
import './RestaurantInfo.css'

export default class RestaurantInfo extends Component {
  render () {
    let propsMap
    let restaurantName

    if(this.props.currentRestaurant.length !== undefined){
      propsMap = this.props.currentRestaurant.map(data => {
        restaurantName = data.restaurant_name
        return (
          <li key={data.restaurant_id + Math.random()}><strong>{data.user_name}</strong> wrote: <br/>{data.description} <br/> {data.stars} stars!</li>
        )
      })
    } else {
      propsMap = []
    }

    return (
      <div className="component-RestaurantInfo">
        <div className="textData">
          <h3>{ restaurantName }</h3>
          <ul>
            {propsMap}
          </ul>
        </div>
      </div>
    )
  }
}
