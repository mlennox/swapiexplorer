import React, { Component } from 'react'
import People from './index'
import { fetcher } from '../fetcher/index'

export default class PeopleContainer extends Component {
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
      people: {}
    }
  }

  render() {
    return <People people={this.state.people} navigate={this.props.navigate} />
  }

  componentDidMount() {
    // Is this a potential memory leak if we have closed the view?
    // NOTE : people is paged, ten per page, total 87
    // TODO : manage paged results
    fetcher('https://swapi.co/api/people/', { method: 'get' }, this.results_parser)
      .then(people => this.setState({ people: people }))
  }

  results_parser = response => {
    return JSON.parse(response._bodyText).results
  }

  componentWillUnmount() {
    // cancel fetch - when this settles down https://github.com/whatwg/fetch/issues/447
  }
}