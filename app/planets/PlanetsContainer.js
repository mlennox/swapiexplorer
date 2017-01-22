import React, { Component } from 'react'
import DC_HOC from '../containers/DataContainerHOC'
import Planets from './index'

class PlanetsContainer extends Component {

  fetch_details = {
    url: 'https://swapi.co/api/planets/',
    options: { method: 'get' }
  }

  render() {
    return <Planets data={this.state.data} navigate={this.props.navigate} />
  }

}

export default DC_HOC(PlanetsContainer)