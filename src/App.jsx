import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BamosList from './compornets/BamosList'
import Feedback from './compornets/Feedback'
import Footer from './compornets/Footer'
import Header from './compornets/Header'
import Firstview from './compornets/Firstview'

function App() {

  return (
    <>
      <Header />
      <Firstview />
      <BamosList />
      <Feedback />
      <Footer />
    </>
  )
}

export default App
