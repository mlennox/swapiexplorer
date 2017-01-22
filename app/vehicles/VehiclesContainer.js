import React, { Component } from 'react'
import DC_HOC from '../containers/DataContainerHOC'
import Vehicles from './index'

class VehiclesContainer extends Component {

  fetch_details = {
    url: 'https://swapi.co/api/vehicles/',
    options: { method: 'get' }
  }

  render() {
    return <Vehicles data={this.state.data} navigate={this.props.navigate} />
  }

}

export default DC_HOC(VehiclesContainer)