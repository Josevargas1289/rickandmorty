import React from 'react'
import rick from "../assets/img/rick.jpg"
import pngtext from "../assets/img/pngtext.png"


const ScreenCharge = () => {
    return (
        <div className='screen-container'>
            <div className='screen'>
                <img src={rick} alt="img" />
                <h1 className='title-screen'>Cargando. . . .</h1>
                <img className='screnn-welcome' src={pngtext} alt="" />
            </div>

        </div>
    );
};

export default ScreenCharge;