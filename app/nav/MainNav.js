import React, { Component } from 'react'
import { NavigationExperimental } from 'react-native'
import reducer from './navReducer'
import { renderScene } from './renderScene'
import pino from 'pino'

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

class MainNav extends Component {


  constructor() {
    super()
    this.state = { navState: reducer() }
    this._renderScene = renderScene(this._navigate)
    this.pino = pino() // we should be able to pass options to disable non-dev builds
  }

  _renderScene = () => {}

  _navigate = (action, route) => {
    this.pino.info('_navigate called', action, route)
    const navState = reducer(this.state.navState, action, route)
    this.setState({ navState })
  }

  _onNavigateBack = (props) => {
    console.log('onNavigateBack called')
  }

  _onNavigate = () => {
    console.log('onNavigate called')
  }

  render() {
    return (
      <NavigationCardStack
        navigationState={this.state.navState}
        onNavigateBack={this._onNavigateBack}
        onNavigate={this._onNavigate}
        renderScene={this._renderScene}
        enableGestures={true}
        gestureResponseDistance={100}
        />
    )
  }
}

export default MainNav