import React, { Component } from 'react'
import { Button, ListView, View, Text } from 'react-native'

const route_key = 'Films'

export default class Films extends Component  {

  ds = null

  constructor(props) {
    super(props)
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      filmsDataSource: ds.cloneWithRows({})
    }
  }

  componentWillReceiveProps(props) {
    console.log('will recieve - - - - - - -', props)
    this.setState({
      filmsDataSource: ds.cloneWithRows(props.data)
    })
  }

  render() {
    return (
      <View>
          <Text>Hello from {route_key}</Text>
          <Button title="Back" onPress={() => this.props.navigate('pop', { key: route_key})} />
          <ListView
            dataSource={this.state.filmsDataSource}
            renderRow={this.FilmRow.bind(this)}
            enableEmptySections={true}
          />
        </View>
    )
  }

  FilmRow = (film) => <Text>Star Wars {film.episode_id} - {film.title}</Text>
}