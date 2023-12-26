import React from 'react';
import ReactDOM from 'react-dom';
 function ArrayList(){

     const myLists = ['BMW','Audi','MG'];
     
     const myList = myLists.map((myList)=>{
         return <li>{myList}</li>;
        });
        
        ReactDOM.render(
            <ul>
        {myList}
    </ul>, 
    document.getElementById('root')
    );
}
export default ArrayList;