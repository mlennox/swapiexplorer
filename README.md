# Star Wars API explorer

This is a react-native app that uses the wonderful Star Wars API. The intention is to produce an app that allows you to navigate around the data in a variety of ways. 

## Jest
I'm giving up on Jest, [my 'notes' about Jest are here](./jest.md)

## AVA
With a little tweaking we can easily have coverage reports using nyc/istanbul, testing of react (native) components and vanilla JS, full support of async etc.

And we get snaphots now too.

### Configuration

## Navigation

NavigationExperimental provides navigation utilities for react native. Despite the name, it is the de facto standard for navigation as previous Navigation components, while still usable, have been deprecated.
 
[Read about NavigationExperimental in React Native docs](https://facebook.github.io/react-native/releases/0.40/docs/navigation.html#navigationexperimental)
 
The Star Wars API explorer uses the standard navigation stack provided by the NavigationExperimental library. 



```jsx
import { NavigationExperimental } from 'react-native'
const { NavigationCardStack } = NavigationExperimental

<NavigationCardStack
        direction={direction}
        navigationState={navState}
        renderScene={() => {}}
        renderHeader={() => {}}
        onNavigateBack={() => {}}
        />
```


## Fetch and Caching




