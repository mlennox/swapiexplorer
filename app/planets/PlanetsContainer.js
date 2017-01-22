import React, { Component } from 'react'
import DataContainerBase from '../containers/DataContainerBase'
import Planet from './index'


export default class PlanetsContainer extends DataContainerBase {

  constructor() {
    super()
    this.state = {
      data: {}
    }
    this.fetch_details = {
      url: 'https://swapi.co/api/planets/',
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
    return <Planet data={this.state.data} navigate={this.props.navigate} />
  }

}