import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);
  const [count1, setCoun1] = useState(0);
  const [count2, setCount2]=useState(0);
  useEffect(() => {
    
    setCoun1((count1) => count1+1 );
    setCount2((count2)=> count2+1);
    
  },[count]);



  return (
    <>
    
    <h1>I've rendered count {count} times!</h1>;
    <h1>I've rendered count1 {count1} times!</h1>;
    <h1>I've rendered count2 {count2} times!</h1>;
    <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
  

}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);
export default Timer;