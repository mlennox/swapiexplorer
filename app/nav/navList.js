import React, { Component } from 'react';
import {
  Button,
  ListView
} from 'react-native';

class NavList extends Component {

  _fetchData = () => {
    if (!this.state || !this.state.dataSource) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(this.props.scene_keys),
      };
    }
    return this.state.dataSource
  }

  render() {

    return (
        <ListView
          dataSource={this._fetchData()}
          renderRow={this.NavRow.bind(this)}
        />
    );
  }

  NavRow = (scene_key) => <Button title={scene_key} onPress={() => this.props.navigate('push', { key: scene_key })}></Button>
}

export default NavList



