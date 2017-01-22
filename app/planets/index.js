import React, { Component } from 'react'
import { Button, ListView, Text, View } from 'react-native'

// const route_key = 'Planets'
//
// export default class stub extends Component  {
//
//   ds = null
//
//   constructor(props) {
//     super(props)
//     ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       data_source: ds.cloneWithRows(props.planets)
//     }
//   }
//
//   componentWillReceiveProps(props) {
//     this.setState({
//       data_source: ds.cloneWithRows(props.planets)
//     })
//   }
//
//   render() {
//     return (
//       <View>
//         <Text>Hello from {route_key}</Text>
//         <Button title="Back" onPress={() => this.props.navigate('pop', { key: route_key})} />
//         <ListView
//           dataSource={this.state.data_source}
//           renderRow={this.Row.bind(this)}
//           enableEmptySections={true}
//         />
//       </View>
//     )
//   }
//
//   Row = (planet) => <Text>{planet.name} ({planet.terrain})</Text>
// }



function ListBase(Wrapped) {
  return class Lister extends Wrapped {

    ds = null

    constructor(props) {
      super(props)
      ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        data_source: ds.cloneWithRows({})
      }
    }

    componentWillReceiveProps(props) {
      console.log('will receive - - - - - - -', props)
      this.setState({
        data_source: ds.cloneWithRows(props.data)
      })
    }

    render() {
      return (
        <View>
          <Text>Hello from {this.route_key}</Text>
          <Button title="Back" onPress={() => this.props.navigate('pop', { key: this.route_key})} />
          <ListView
            dataSource={this.state.data_source}
            renderRow={this.Row.bind(this)}
            enableEmptySections={true}
          />
        </View>
      )
    }

  }
}

class planets extends Component {
  // constructor(props){
  //   super(props)
  // }
  route_key = 'Planets'
  Row = (planet) => <Text>{planet.name} ({planet.terrain})</Text>
}

export default ListBase(planets)