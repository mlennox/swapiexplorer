import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'

const route_key = 'Starships'

export default class stub extends Component  {

  constructor() {
    super()

  }

  render() {
    return (
      <View>
        <Text>Hello from {route_key}</Text>
        <Button title="Back" onPress={() => this.props.navigate('pop', { key: route_key})} />
      </View>
    )
  }
}

