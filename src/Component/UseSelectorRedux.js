// import React from "react";
// import {useSelector,useDispatch} from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
// import StudentProject from "./StudentProject";

// export default function UseSelectorRedux(){

//     // const store = configureStore({
//     //     reducer: {},
//     //    });
//    const {}=useSelector(state=>state.Load())
//     const dispatch=useDispatch();
    
    
//      dispatch(('https://localhost:7240/api/Catagory/GetAll').then(data=>{
//       //console.log(result.data)
//       setState({...state,dataSource:result.data.catagoriesList,ParentdataSource:result.data.catagoriesList,AddOpen:false,EditOpen:false,OpenDelete:false})
//        })
//       )
    
//     return(
//         <>
         
//         </>
//     )
// };
// import axios from  "axios";
// export const fetchdata = () => {
//     return (dispatch) => {
//       dispatch(fetchdataRequest());
//       axios
//         .get('https://localhost:7240/api/Catagory/GetAll')
//         .then((response) => {
//           const students = response.data.catagoriesList;
//           dispatch(fetchdataSuccess(students));
//         })
//         .catch((error) => {
//           dispatch(fetchdataFailure('Error fetching data.'));
//         });
//     };
//   };