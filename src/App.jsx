
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterComponent from './components/CounterComponent'
import CarComponent from './components/CarComponent'
import { useState } from 'react'
import VehicleComponent from './components/VehicleComponent'
function App() {
  

    const [bikes, setBikes] = useState([
    {
        id:1,
        make:"KTM",
        model:"390 Adventure"
    },
    {
        id:2,
        make:"Yamaha",
        model:"XT660Z Tenere"
    },
    {
        id:3,
        make:"BMW",
        model:"F650"
    }
])


  const [cars, setCars] = useState([
      {
          id:1,
          make:"Mini",
          model:"Clubman"
      },
      {
          id:2,
          make:"Mini",
          model:"One"
      },
      {
          id:3,
          make:"Smart",
          model:"ForTwo"
      }
  ])

  return (
    <>
      <VehicleComponent title={"Cars"} vehicles={cars}/>
      <VehicleComponent title={"Bikes"} vehicles={bikes}/>
      <hr />
      <CarComponent />
      <hr />
      <CarComponent />
      <hr />
      <CounterComponent />
      <hr />
      <CounterComponent />
    </>
  )
}

export default App
