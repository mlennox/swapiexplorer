import React, { Component } from 'react'

import Films from '../films/FilmsContainer'
import Home from '../home/index'
import People from '../people/PeopleContainer'
import Planets from '../planets/PlanetsContainer'
import Species from '../species/SpeciesContainer'
import Starships from '../starships/index'
import Vehicles from '../vehicles/index'

export const scene_keys = [ 'Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles']

export const default_scene = 'Home'

export const renderScene = (navigate) => {
  console.log('renderScene', scene_keys)
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
      default:
        return <Home navigate={navigate} scene_keys={scene_keys} />
    }
  }
}


