import React, { Component } from 'react'
import DC_HOC from '../containers/DataContainerHOC'
import Films from './index'


class FilmsContainer extends Component {

  fetch_details = {
    url: 'https://swapi.co/api/films/',
    options: { method: 'get' }
  }

  render() {
    return <Films data={this.state.data} navigate={this.props.navigate} />
  }

}

export default DC_HOC(FilmsContainer)