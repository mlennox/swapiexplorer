import React, { Component } from 'react'

import Films from '../films/index'
import Home from '../home/index'
import People from '../people/index'
import Planets from '../planets/index'
import Species from '../species/index'
import Starships from '../starships/index'
import Vehicles from '../vehicles/index'

const scene_keys = [ 'Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles']

export const renderScene = (navigate) => {

  return (props) => {
    switch (props.scene.route.key) {
      case 'Films':
        return <Films navigate={navigate} />
      case 'People':
        return <People navigate={navigate} />
      case 'Planets':
        return <Planets navigate={navigate} />
      case 'Species':
        return <Species navigate={navigate} />
      case 'Starships':
        return <Starships navigate={navigate} />
      case 'Vehicles':
        return <Vehicles navigate={navigate} />
      case 'Home':
      default:
        return <Home navigate={navigate} scene_keys={scene_keys} />
    }
  }
}


