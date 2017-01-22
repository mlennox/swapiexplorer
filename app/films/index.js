import React, { Component } from 'react'
import { Text } from 'react-native'
import ListHOC from '../containers/ListHOC'

class films extends Component {
  route_key = 'Films'
  Row = (film) => <Text>Star Wars {film.episode_id} - {film.title}</Text>
}

export default ListHOC(films)