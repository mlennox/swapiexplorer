import React, { Component } from 'react'

import Films from '../films/index'
import Home from '../home/index'
import People from '../people/index'
import Planets from '../planets/index'
import Species from '../species/index'
import Starships from '../starships/index'
import Vehicles from '../vehicles/index'

export const default_scene = 'Home'

const scenes = {
  Films: <Films />,
  Home: <Home />,
  People: <People />,
  Planets: <Planets />,
  Species: <Species />,
  Starships: <Starships />,
  Vehicles: <Vehicles />
}

export const scene_keys = Object.keys(scenes)
  .filter((scene_key) => (scene_key != default_scene))

scenes.Default = scenes[default_scene]

export default scenes