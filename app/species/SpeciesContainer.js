import React, { Component } from 'react'
import Species from './index'
import DC_HOC from '../containers/DataContainerHOC'

class SpeciesContainer extends Component {

  fetch_details = {
    url: 'https://swapi.co/api/species/',
    options: { method: 'get' }
  }

  render() {
    return <Species data={this.state.data} navigate={this.props.navigate} />
  }

}

export default DC_HOC(SpeciesContainer)