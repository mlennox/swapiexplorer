import React, { Component } from 'react';
import {
  Button,
  ListView
} from 'react-native';
import { scene_keys } from './scenes'

class NavList extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(scene_keys),
    };
  }

  render() {

    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.NavRow.bind(this)}
        />
    );
  }

  NavRow = (rowData) => <Button title={rowData} onPress={() => this._navigate(rowData)}></Button>

  _navigate = (datum) => {
    console.log(datum)
  }
}

export default NavList



