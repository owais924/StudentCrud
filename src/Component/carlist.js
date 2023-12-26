import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom/client';

function carlist(props) {

    const {brand}=props.brand//object literacy


    console.log(props);

    return (
        <>
        <h2>I am a { brand }!</h2>
        <h2>I am a { brand }!</h2>
        </>

    ) 
  }


export default carlist

