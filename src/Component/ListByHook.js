import React, { useState } from 'react';
//import './App.css';
 
function ListByHook() {
 const initialValue = [1, 2, 3, 4, 5]
 
 const [ numbers, setNumber ] = useState(initialValue);
 
 return (
   <div>
     {numbers.map((number) => {
       return <div key={number}>{number}</div>;
     })}
   </div>
 );
}


export default ListByHook;