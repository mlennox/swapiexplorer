import React, { Component } from 'react'
import { Button, ListView, View, Text } from 'react-native'

const route_key = 'Films'

export default class Films extends Component  {

  constructor(props) {
    super(props)
    // // TODO: this should be split out into a separate films list component?
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      films: {}
    }
    this.state.filmsDataSource = ds.cloneWithRows(this.state.films)
  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps props', props)
    this.setState({films: props})
  }

  componentWillUpdate(props) {
    console.log('componentWillUpdate this.props', this.props)
    console.log('componentWillUpdate props', props)
  }

  render() {
    return (
      <View>
        <Text>Hello from {route_key}</Text>
        <Button title="Back" onPress={() => this.props.navigate('pop', { key: route_key})} />
        {/*<ListView dataSource={this.state.filmsDataSource} renderRow={this.FilmRow.bind(this)}/>*/}
      </View>
    )
  }

  FilmRow = (film) => <Text>Star Wars {film.episode_id} : {film.title}</Text>
}