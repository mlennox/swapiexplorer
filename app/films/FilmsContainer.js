import React, { Component } from 'react'
import DataContainerBase from '../containers/DataContainerBase'
import Films from './index'

export default class PlanetsContainer extends DataContainerBase {

  constructor() {
    super()

     /* Format of data from films endpoint
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
     } */

    this.state = {
      data: {}
    }
    this.fetch_details = {
      url: 'https://swapi.co/api/films/',
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
    return <Films data={this.state.data} navigate={this.props.navigate} />
  }

}








//
//
//
//
//
// import { fetcher } from '../fetcher/'
//
// export default class FilmsContainer extends Component {
//   constructor() {
//     super()
//     /***
//      * Format of data from films endpoint
//      {
//        "count": 7,
//        "next": null,
//        "previous": null,
//        "results": [
//          {
//            "title": "A New Hope",
//            "episode_id": 4,
//            "opening_crawl": "blah blah",
//            "director": "George Lucas",
//            "producer": "Gary Kurtz, Rick McCallum",
//            "release_date": "1977-05-25",
//            "characters": [
//              "http://swapi.co/api/people/1/",
//              etc.
//            ],
//            "planets": [
//              "http://swapi.co/api/planets/2/",
//              etc.
//            ],
//            "starships": [
//              "http://swapi.co/api/starships/2/",
//              etc.
//            ],
//            "vehicles": [
//              "http://swapi.co/api/vehicles/4/",
//              etc.
//            ],
//            "species": [
//              "http://swapi.co/api/species/5/",
//              etc.
//            ],
//            "created": "2014-12-10T14:23:31.880000Z",
//            "edited": "2015-04-11T09:46:52.774897Z",
//            "url": "http://swapi.co/api/films/1/"
//          },
//        ]
//      }
//     */
//     this.state = {
//       films: {}
//     }
//   }
//
//   render() {
//     return <Films films={this.state.films} navigate={this.props.navigate} />
//   }
//
//   componentDidMount() {
//     fetcher('https://swapi.co/api/films/', {method: 'get'}, this.results_parser)
//       .then(films => this.setState({ films: films }))
//   }
//
//   results_parser = response => JSON.parse(response._bodyText)
//     .results
//     .sort((a,b) => {
//       if (a.episode_id === b.episode_id) return 0
//       let ep_a = (+(a.episode_id))
//       let ep_b = (+(b.episode_id))
//       return (ep_a > ep_b ) ? 1 : -1
//     })
//
//   componentWillUnmount() {
//     // cancel fetch - when this settles down https://github.com/whatwg/fetch/issues/447
//   }
// }