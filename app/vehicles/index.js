import React, { Component } from 'react'
import { Text } from 'react-native'
import ListHOC from '../containers/ListHOC'

class vehicles extends Component {
  route_key = 'Vehicles'
  Row = (vehicle) => <Text>{vehicle.name} (crew : {vehicle.crew})</Text>
}

export default ListHOC(vehicles)

/***
 * {
            "name": "Sand Crawler",
            "model": "Digger Crawler",
            "manufacturer": "Corellia Mining Corporation",
            "cost_in_credits": "150000",
            "length": "36.8",
            "max_atmosphering_speed": "30",
            "crew": "46",
            "passengers": "30",
            "cargo_capacity": "50000",
            "consumables": "2 months",
            "vehicle_class": "wheeled",
            "pilots": [],
            "films": [
                "http://swapi.co/api/films/5/",
                "http://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T15:36:25.724000Z",
            "edited": "2014-12-22T18:21:15.523587Z",
            "url": "http://swapi.co/api/vehicles/4/"
        },
 */