import React, { Component } from 'react'
import { NavigationExperimental } from 'react-native'
import reducer from './navReducer'
import scenes from './scenes'

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

class MainNav extends Component {

  constructor() {
    super()
    this.state = { navState: reducer() }
  }

  _renderScene = (props) => {
    console.log('the key', props.scene.route.key)

    return (
      (scenes.hasOwnProperty(props.scene.route.key))
        ? scenes[props.scene.route.key]
        : scenes.Default
    )
  }

  render() {
    return (
      <NavigationCardStack
        navigationState={this.state.navState}
        renderScene={this._renderScene} />
    )
  }
}

export default MainNav