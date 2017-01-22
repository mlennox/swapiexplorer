import React, { Component } from 'react'
import DataContainerBase from '../containers/DataContainerBase'
import People from './index'

export default class PlanetsContainer extends DataContainerBase {

  constructor() {
    super()
    /***
     * Format of data from films endpoint
     {
      "count": 87,
      "next": "http://swapi.co/api/people/?page=2",
      "previous": null,
      "results": [
          {
              "name": "Luke Skywalker",
              "height": "172",
              "mass": "77",
              "hair_color": "blond",
              "skin_color": "fair",
              "eye_color": "blue",
              "birth_year": "19BBY",
              "gender": "male",
              "homeworld": "http://swapi.co/api/planets/1/",
              "films": [
                  "http://swapi.co/api/films/6/",
                  etc.
              ],
              "species": [
                  "http://swapi.co/api/species/1/"
              ],
              "vehicles": [
                  "http://swapi.co/api/vehicles/14/",
                  etc.
              ],
              "starships": [
                  "http://swapi.co/api/starships/12/",
                  etc.
              ],
              "created": "2014-12-09T13:50:51.644000Z",
              "edited": "2014-12-20T21:17:56.891000Z",
              "url": "http://swapi.co/api/people/1/"
          }
       ]
     }
     */
    this.state = {
      data: {}
    }
    this.fetch_details = {
      url: 'https://swapi.co/api/people/',
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
    return <People data={this.state.data} navigate={this.props.navigate} />
  }
}