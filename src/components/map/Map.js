import React, { Component } from 'react'
import './Map.css'
import GoogleMapReact from 'google-map-react'
import MapTooltip from '../map-tooltip'
import RestaurantInfo from '../restaurant-info/RestaurantInfo.js'

class Map extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mapData: [],
      restaurantInfos: {}
    }
  }

  static defaultProps = {
    center: {
      lat: 45.527518,
      lng: -73.596365
    },
    zoom: 17
  }

  updateRestaurantInfo = (childState) => {
    this.setState({ restaurantInfos: childState})
  }

  async componentDidMount () {
    const response = await fetch('https://saber-reaction.glitch.me/restaurants', {method: "POST"})
    const json = await response.json()
    this.setState({ mapData: json})
  }

  render () {
    const listItems = this.state.mapData.filter((elem, index, self) => {
      return index === self.indexOf(elem)
    }).map((data) =>
      <MapTooltip lat={data.restaurant_lat}
                  lng={data.restaurant_lng}
                  text={data.restaurant_name}
                  key={data.restaurant_id+Math.random()}
                  id={data.restaurant_id}
                  updateRestaurantInfo={this.updateRestaurantInfo}
      />
    )
    let restaurantInfo
    if(this.state.restaurantInfos !== undefined){
      restaurantInfo = <RestaurantInfo currentRestaurant={this.state.restaurantInfos}/>
    } else {
      restaurantInfo = <RestaurantInfo/>
    }
    return (
      <div style={{height: '100vh', width: '100%'}}>
        { restaurantInfo }
        <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyBMZiuXHpMDuNWTfJ0NboNqMGGYJVTS4Iw"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {listItems}
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map

