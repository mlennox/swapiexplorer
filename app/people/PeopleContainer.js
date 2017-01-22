import React, { Component } from 'react'
import DC_HOC from '../containers/DataContainerHOC'
import People from './index'

class PeopleContainer extends Component {

  fetch_details = {
    url: 'https://swapi.co/api/people/',
    options: { method: 'get' }
  }

  render() {
    return <People data={this.state.data} navigate={this.props.navigate} />
  }

}

export default DC_HOC(PeopleContainer)