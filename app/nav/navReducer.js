import { NavigationExperimental } from 'react-native'
import { default_scene } from './renderScene'

const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

const default_route = {
  index: 0,
  routes: [{key: default_scene}]
}

export default (state, action, route) => {
  if (!state) {
    console.log('reducer - returning default route')
    return default_route
  }

  console.log('reducer called', action, route)

  switch (action) {
    case 'push':
      return NavigationStateUtils.push(state, route)
    case 'pop':
      return NavigationStateUtils.pop(state)
    default:
      return state
  }
}