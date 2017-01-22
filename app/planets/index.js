import React, { Component } from 'react'
import { Text } from 'react-native'
import ListHOC from '../containers/ListHOC'

class planets extends Component {
  route_key = 'Planets'
  Row = (planet) => <Text>{planet.name} ({planet.terrain})</Text>
}

export default ListHOC(planets)