import Films from '../films/index'
import Home from '../home/index'
import People from '../people/index'
import Planets from '../planets/index'
import Species from '../species/index'
import Starships from '../starships/index'
import Vehicles from '../vehicles/index'

const scenes = {
  Films: <Films />,
  Home: <Home />,
  People: <People />,
  Planets: <Planets />,
  Species: <Species />,
  Starships: <Starships />,
  Vehicles: <Vehicles />
}

scenes.Default = scenes.Home

export default scenes