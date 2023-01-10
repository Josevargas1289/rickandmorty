import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Location from './components/Location'

function App() {

  const [isLoading, setIsLoading] = useState(true);


  return (
    <div className="App">
      <div>
<div className='header-container'>
  <h1>title</h1>
  
        {/* container para la imagen de fondo del banner */}
      </div>
      <Location/>

      </div>

      
   
      
    </div>
  )
}

export default App
