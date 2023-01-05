import { useEffect, useState } from 'react'
import axios from 'axios'


const Location = () => {
    const [location, setLocation]= useState({})
    const[searchIdLocation, setSearchIdLocation]=useState(" ")
    
    
    useEffect(()=>{
      const randomId = Math.floor(Math.random()*126) + 1;
      axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res=>setLocation(res.data))
    
     
    
    },[]);
    console.log(location);
    

    const searchLocation =()=>{
      axios.get(`https://rickandmortyapi.com/api/location/${searchIdLocation || "1"}`)
      .then(res=>setLocation(res.data))
    
    }
    return (
        <div>
            <h1>Rick y Morthy</h1>
      <input
        type="text"
        placeholder="type a location for id"
        value={searchIdLocation}
        onChange={(e) => setSearchIdLocation(e.target.value)}
      />
      <button onClick={searchLocation}>Search location</button>
     <h2>{location.name}</h2>
     <ul>
      {
        location.residents?.map(resident =>(
          <li key={resident}>
            {resident}
          </li>
        ))
      }

     </ul>
            
        </div>
    );
};

export default Location;