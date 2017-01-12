import React, { Component } from 'react'
import { Button, ListView, View, Text } from 'react-native'

const route_key = 'People'

export default class stub extends Component  {

  ds = null

  constructor(props) {
    super(props)
    // // TODO: this should be split out into a separate films list component?
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.people)
    }
  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps props')
    this.setState({
      dataSource: ds.cloneWithRows(props.people)
    })
  }

  render() {
    return (
      <View>
        <Text>Hello from {route_key}</Text>
        <Button title="Back" onPress={() => this.props.navigate('pop', { key: route_key})} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.PeopleRow.bind(this)}
          enableEmptySections={true}
        />
      </View>
    )
  }

  PeopleRow = (person) => <Text>{person.name}, {person.gender}</Text>
}

