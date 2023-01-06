import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Location from './components/Location'


function App() {


  return (
    <div className="App">
      <div className='header-container'>
        {/* container para la imagen de fondo del banner */}
      </div>
      <Location/>
     
      
    </div>
  )
}

export default App
