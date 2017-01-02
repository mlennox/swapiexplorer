import { NavigationExperimental } from 'react-native'
const { NavStateUtils } = NavigationExperimental;

export default (navState, action) => {
  const {
    type,
    key
  } = action;

  switch (type) {
    case 'push':
      const route = {key}
      return NavStateUtils.push(navState, route)
    case 'pop':
      return NavStateUtils.pop(navState)
    default:
      return navState
  }
}