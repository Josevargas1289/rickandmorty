import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CharacterCard = ({ resident }) => {

    const [character, setCharacter] = useState({})


    useEffect(() => {
        axios.get(resident)
            .then(res => setCharacter(res.data))

    }, [])
    // console.log(character);

    const actualStatus = ()=>{
        if (character.status === "Dead") {
          
           return "red" 
        } else if(character.status === "Alive"){
            return "green" 
        }else if(character.status === "unknown"){
            return "grey" 
        }
    }

    const statusTraduccion = ()=>{
        if (character.status === "Alive") {
            return "Vivo"
        } else if(character.status === "Dead"){
            return "Muerto"

        }else{
            return "Desconocido"
        }
    }


    return (
        <div className='container-card'>
            <div className='card'>
                <div className='img-character'>
                    <img src={character.image} alt="" />

                    <h4 className='status-card'><span className='span-status' style={{background: actualStatus()}}></span>{statusTraduccion()}</h4>
                </div>
                <div className='informatio-card'>
                    <h2>
                        {character.name}
                    </h2>
                    <span>ESPECIE</span>
                    <h3>{character.species}</h3>
                    <span>ORIGEN</span>
                    <h3>{character.location?.name}</h3>
                    <span>APARICION EN EPISODIOS</span>
                    <h3>{character.episode?.length}</h3>
                </div>
            </div>
           
        </div>
    );
};

export default CharacterCard;