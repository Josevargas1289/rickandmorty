import { useEffect, useState } from 'react'
import axios from 'axios'


const Location = () => {
    const [location, setLocation] = useState({})
    const [searchIdLocation, setSearchIdLocation] = useState(" ")


    useEffect(() => {
        const randomId = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
            .then(res => setLocation(res.data))



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
                <ul>
                    {
                        location.residents?.map(resident => (
                            <li key={resident}>
                                {resident}
                            </li>
                        ))
                    }

                </ul>
            </div>


        </div>
    );
};

export default Location;