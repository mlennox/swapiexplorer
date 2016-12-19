import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {styles} from '../styles'

export default class homepage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}