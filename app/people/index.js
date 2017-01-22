import React, { Component } from 'react'
import { Text } from 'react-native'
import ListHOC from '../containers/ListHOC'

class people extends Component {
  route_key = 'People'
  Row = (film) => <Text>{film.name}, {film.gender}</Text>
}

export default ListHOC(people)