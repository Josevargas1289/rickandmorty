import React from 'react'
import rick from "../assets/img/rick.jpg"


const ScreenCharge = () => {
    return (
        <div className='screen-container'>
            <div className='screen'>
                <img src={rick} alt="img" />
                <h1 className='title-screen'>Cargando. . . .</h1>
                <h1 className='screnn-welcome'>Bienvenido A: Rick <br /> And Morty APP</h1>
            </div>

        </div>
    );
};

export default ScreenCharge;