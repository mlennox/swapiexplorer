import { NavigationExperimental } from 'react-native'
const { NavigationStateUtils } = NavigationExperimental;

const default_route = {
  index: 0,
  routes: [{key: 'Home'}]
}

export default (state, action, route) => {
  if (!state) {
    return default_route
  }
  switch (action) {
    case 'push':
      return NavigationStateUtils.push(state, route)
    case 'pop':
      return NavigationStateUtils.pop(state)
    default:
      return state
  }
}