import React, { Component } from 'react'
import DC_HOC from '../containers/DataContainerHOC'
import Starships from './index'

class StarshipsContainer extends Component {

  fetch_details = {
    url: 'https://swapi.co/api/starships/',
    options: { method: 'get' }
  }

  render() {
    return <Starships data={this.state.data} navigate={this.props.navigate} />
  }

}

export default DC_HOC(StarshipsContainer)