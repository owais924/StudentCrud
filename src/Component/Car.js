
import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom/client';
import Carlist from './carlist'

export default function Garage(){ //Child
    const CarInfo={name:"Ford", model:"Mustang"};
    return(
    <>
        <h1>Who Lives in my Garage?</h1>
       <Carlist brand={CarInfo} />
        </>

    );
}


