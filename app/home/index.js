import React, { Component } from 'react';
import {
  Button,
  ListView,
  Text,
  View
} from 'react-native';
import {styles} from '../styles'

import NavList from '../nav/navList'

export default class homepage extends Component {
  constructor() {
    super();
  }

  render() {
    console.log('homnepage', this.props.scene_keys)
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Star Wars API explorer</Text>
        <NavList navigate={this.props.navigate} scene_keys={this.props.scene_keys} />
      </View>
    );
  }
}