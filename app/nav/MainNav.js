import React, { Component } from 'react'
import { NavigationExperimental } from 'react-native'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental

class MainNav extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      navigationState: {
        index: 0,
        routes: [{key: 'home page'}]
      }
    }

    this._onNavigationChange = this._onNavigationChange.bind(this)
  }

  _onNavigationChange(type) {

  }

  render() {
    return (
      <Text>Something</Text>
    )
  }
}

class SwapiNavigator extends Component {

}