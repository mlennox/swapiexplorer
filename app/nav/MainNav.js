import React, { Component } from 'react'
import { NavigationExperimental } from 'react-native'

// import Films from '../films/index'
import Home from '../home/index'
// import People from '../people/index'
// import Planets from '../planets/index'
// import Species from '../species/index'
// import Starships from '../starships/index'
// import Vehicles from '../vehicles/index'


const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const reducer = (state) => {
  return {
    index: 0,
    routes: [(key: 'Home')]
  }
}

class MainNav extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = { navState: reducer() }
  }

  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Home':
        return <Home/>
    }
  }

  render() {
    return (
      <NavigationCardStack
        navigationState={this.state}
        renderScene={this._renderScene} />
    )
  }
}

export default MainNav