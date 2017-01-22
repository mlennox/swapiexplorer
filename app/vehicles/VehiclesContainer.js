import React, { Component } from 'react'
import DataContainerBase from '../containers/DataContainerBase'
import Starships from './index'


export default class StarshipsContainer extends DataContainerBase {

  constructor() {
    super()
    this.state = {
      data: {}
    }
    this.fetch_details = {
      url: 'https://swapi.co/api/vehicles/',
      options: { method: 'get' }
    }
  }

  results_parser = response => {
    try {
      return JSON.parse(response._bodyText).results
    }
    catch (err) {
      console.log('results parser error - - - - - - - - - - -', err)
    }
  }

  results_assigner = results => {
    this.setState({
      data: results
    })
  }

  render() {
    return <Starships data={this.state.data} navigate={this.props.navigate} />
  }

}