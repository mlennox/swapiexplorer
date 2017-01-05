import React, { Component } from 'react';
import {
  Button,
  ListView,
  Text,
  View
} from 'react-native';
import {styles} from '../styles'

export default class homepage extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'People',
        'Films',
        'Starships',
        'Vehicles',
        'Species',
        'Planets'
      ]),
    };
  }


  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Star Wars API explorer</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.NavRow.bind(this)}
        />
      </View>
    );
  }

  NavRow = (rowData) => <Button title={rowData} onPress={() => PressHandler(rowData)}></Button>
}

const PressHandler = (datum) => {
  console.log(datum)
}

