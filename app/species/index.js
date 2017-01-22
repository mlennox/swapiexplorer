import React, { Component } from 'react'
import { Text } from 'react-native'
import ListHOC from '../containers/ListHOC'

class species extends Component {
  route_key = 'Species'
  Row = (species) => <Text>{species.name} ({species.classification})</Text>
}

export default ListHOC(species)


/***
 {
        "name": "Hutt",
        "classification": "gastropod",
        "designation": "sentient",
        "average_height": "300",
        "skin_colors": "green, brown, tan",
        "hair_colors": "n/a",
        "eye_colors": "yellow, red",
        "average_lifespan": "1000",
        "homeworld": "http://swapi.co/api/planets/24/",
        "language": "Huttese",
        "people": [
            "http://swapi.co/api/people/16/"
        ],
        "films": [
            "http://swapi.co/api/films/3/",
            "http://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T17:12:50.410000Z",
        "edited": "2014-12-20T21:36:42.146000Z",
        "url": "http://swapi.co/api/species/5/"
    },
 */