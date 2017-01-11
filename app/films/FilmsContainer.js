import React, { Component } from 'react'
import Films from './index'

export default class FilmsContainer extends Component {
  constructor() {
    super()
    /***
     * Format of data from films endpoint
     {
       "count": 7,
       "next": null,
       "previous": null,
       "results": [
         {
           "title": "A New Hope",
           "episode_id": 4,
           "opening_crawl": "blah blah",
           "director": "George Lucas",
           "producer": "Gary Kurtz, Rick McCallum",
           "release_date": "1977-05-25",
           "characters": [
             "http://swapi.co/api/people/1/",
             etc.
           ],
           "planets": [
             "http://swapi.co/api/planets/2/",
             etc.
           ],
           "starships": [
             "http://swapi.co/api/starships/2/",
             etc.
           ],
           "vehicles": [
             "http://swapi.co/api/vehicles/4/",
             etc.
           ],
           "species": [
             "http://swapi.co/api/species/5/",
             etc.
           ],
           "created": "2014-12-10T14:23:31.880000Z",
           "edited": "2015-04-11T09:46:52.774897Z",
           "url": "http://swapi.co/api/films/1/"
         },
       ]
     }
    */
    this.state = {
      films: {}
    }
  }

  render() {
    return <Films films={this.state.films} navigate={this.props.navigate} />
  }

  componentDidMount() {
    // Is this a potential memory leak if we have closed the view?
    fetch('https://swapi.co/api/films/', { method: 'get' })
      .then((response) => {
        this.setState({ films: response.results })
        console.log('films response received, films component should update')
      })
      .catch((err) => console.log('films fetch', err))
  }

  componentWillUnmount() {
    // cancel fetch - when this settles down https://github.com/whatwg/fetch/issues/447
  }
}