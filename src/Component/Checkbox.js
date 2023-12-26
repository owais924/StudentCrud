import React, { useState } from "react";
export default function Checkbox() {
  const [checked, setChecked] = useState(true);
  const current = new Date();
  const [date,setDate]=useState(`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`);
  

   
 //const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
 const crdate = `${current.getDate()}`;

  
  return (
    <>
    <div className="Checkbox">
      <label htmlFor="example">Select checkbox</label>
      <input
        checked={checked}
        id="example"
        type="checkbox"
        onChange={(e) => setChecked(e.target.checked)}
      ></input>
      <button onClick={()=> setDate(crdate)}>current</button>
    </div>
    
    <div> <h1>Current Date: {date}</h1> </div>
     
     {/* <h1>Current date is {current.getFullYear()}</h1> */}
     </>
  );
}
