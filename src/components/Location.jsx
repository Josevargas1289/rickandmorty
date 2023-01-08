import { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard';
import ScreenCharge from './ScreenCharge';
import Page from './page';





const Location = () => {
    const [location, setLocation] = useState({})
    const [searchIdLocation, setSearchIdLocation] = useState(" ")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
            .then(res => setLocation(res.data))
        setTimeout(() => setIsLoading(false), 1000);



    }, []);
    // console.log(location);


    const searchLocation = () => {
      
        axios.get(`https://rickandmortyapi.com/api/location/${searchIdLocation || "1"}`)
            .then(res => setLocation(res.data));
        if (searchIdLocation > 126) {
           
            alert("Only 126 Locations")
        }
        initPage();

    }

    const [pag, setpage] = useState(1);
    const nexPage = 8
    const couterPage = Math.ceil(location.residents?.length / nexPage);
    const firtsIndex = (pag - 1) * nexPage;

    const residents = location.residents?.slice(firtsIndex, firtsIndex + nexPage);
   
    const initPage =()=>{
        setpage(1)
    }

    // console.log(couterPage);

    return (


        <div >
            {
                isLoading ? (
                    <ScreenCharge />
                ) : (
                    <div className='container-location'>
                        <h1 className='title'>Rick and Morty App</h1>
                        <div className='container-search'>

                            <input

                                type="number" max={126} min={1}
                                placeholder="ingresa Id entre 1-126"
                                value={searchIdLocation}
                                onChange={(e) => setSearchIdLocation(e.target.value)}
                            />
                            <button onClick={searchLocation}><i className='bx bx-search-alt-2'></i>Search location </button>


                        </div>

                        <div className='container-page'>
                            <Page pag={pag} setpage={setpage} couterPage={couterPage} />
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
                                    residents?.map(resident => (
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