# Star Wars API explorer

This is a react-native app that uses the wonderful Star Wars API. The intention is to produce an app that allows you to navigate around the data in a variety of ways. 

## Jest
I'm giving up on Jest, [my 'notes' about Jest are here](./jest.md)

## AVA
With a little tweaking we can easily have coverage reports using nyc/istanbul, testing of react (native) components and vanilla JS, full support of async etc.

And we get snaphots now too.

### Configuration

## Navigation

The navigation paradigm we will be using is a stack. This allows views to be pushed onto and popped off a stack. This provides a simple 'history' of the users navigation through the app and facilitates navigating back through previous views.

### View or Scene?

### NavigationExperimental

NavigationExperimental provides navigation utilities for react native. Despite the name, it is the de facto standard for navigation as previous Navigation components, while still usable, have been deprecated.
 
[Read about NavigationExperimental in React Native docs](https://facebook.github.io/react-native/releases/0.40/docs/navigation.html#navigationexperimental)
 
#### NavigationCardStack 
The Star Wars API explorer uses the standard navigation card stack provided by the NavigationExperimental library. 

```jsx
import { NavigationExperimental } from 'react-native'
const { NavigationCardStack } = NavigationExperimental

<NavigationCardStack
        navigationState={navState}
        renderScene={() => {}}
        renderHeader={() => {}}
        onNavigate={() => {}}
        />
```
direction: NavigationGestureDirection,
  navigationState: NavigationState,
  onNavigateBack?: Function,
  renderHeader: ?NavigationSceneRenderer,
  renderScene: NavigationSceneRenderer,
  cardStyle?: any,
  style: any,
  gestureResponseDistance?: ?number,
  enableGestures: ?boolean

##### navigationState

When the component renders it binds to the state. The state itself will be reduced by the ```nav/navReducer.js``` module which is outlined below.
 
##### renderScene

This handler should return a scene, which will be rendered as the new view.  

When the navigation state updates, the new route key will be passed into the specified renderScene handler. The handler simply returns the requested scene.

```jsx
_renderScene = (props) => {
    switch (props.scene.route.key) {
        case 'Stuff':
            return <Stuff navigate={this._navigate} />
        default:
            return <Home navigate={this._navigate} scene_keys={this.scene_keys} />
    }
}
```

You can see, for the first approach I'm passing in the onPress handler for each view that will be used in a back button of each view.

I'm also passing in the ```scene_keys``` to the Home view, which is where we are rendering the nav list.

This will change when I introduce Redux and no longer need to pass the properties around like this. 


##### renderHeader

This function should return a NavigationHeader component that can display the page title and also a back button. 


##### onNavigation




##### Other properties and functions

There are additional properties and handlers on the NavigationCardStack object to change how the new view is rendered, how it animates onto the screen etc. but I'm not concerned with them for the moment.



## Fetch and Caching




