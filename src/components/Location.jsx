import { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard';
import ScreenCharge from './ScreenCharge';




const Location = () => {
    const [location, setLocation] = useState({})
    const [searchIdLocation, setSearchIdLocation] = useState(" ")
    const [isLoading, setIsLoading]= useState(true)
    
    useEffect(() => {
        const randomId = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
            .then(res => setLocation(res.data))
            setTimeout(() => setIsLoading(false), 2000);



    }, []);
    console.log(location);


    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${searchIdLocation || "1"}`)
            .then(res => setLocation(res.data));
        if (searchIdLocation > 126) {
            alert("Only 126 Locations")
        }
    }
    return (
        
        
        <div >
            {
                isLoading ?(
                    <ScreenCharge/>
                ):(
                    <div className='container-location'>
                    <h1 className='title'>Rick and Morty App</h1>
                    <div className='container-search'>
        
                        <input
                            type="text"
                            placeholder="Type a location for id"
                            value={searchIdLocation}
                            onChange={(e) => setSearchIdLocation(e.target.value)}
                        />
                        <button onClick={searchLocation}>Search location</button>
        
                    </div>
                    <h2 className='title-location'>{location.name}</h2>
                    <div className='location-info'>
                        <h2><b>Type:</b>  {location.type}</h2>
                        <h2><b>Dimension:</b>  {location.dimension}</h2>
                        <h2><b>Population:</b>  {location.residents?.length}</h2>
                    </div>
                    <div className='list-residents'>
                        <div className='card-colum'>
                            {
                                location.residents?.map(resident => (
                                    <CharacterCard resident={resident} key={resident} />
                                ))
                            }
        
                        </div>
                    </div>
                    </div>

                )
            }
            
           


        </div>
    );
};

export default Location;