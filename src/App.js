//import logo from './logo.svg';

import './App.css';
import React from 'react';
import NewComp from "./Component/NewComp";
import Counter from "./Component/counter";
import Hook from "./Component/Hook";
import Timer from './Component/Timer';
import EventChange from "./Component/EventChange";
import Checkbox from "./Component/Checkbox";
import OnClickEvent from "./Component/OnClickEvent"; 
import ArrayList from './Component/ArrayList';
import ListByHook from './Component/ListByHook';
import UseList from './Component/UseList';
import  BasicTable  from './Component/BasicTable';
import { Table } from 'antd';
import RadioChecbox from './Component/RadioChecbox';
import TreeTable from './Component/TreeTable';
import EditTable from './Component/EditTable';
import Car from './Component/Car';
import Sports  from './Component/Sports';
import Parent from './Component/parent';
import { useDispatch } from 'react-redux';
import StudentCrud from './Component/StudentCrud';
import StudentProject from './Component/StudentProject';
import UseSelectorRedux from './Component/UseSelectorRedux';
 class App extends React.Component{
  styles={
    fontStyle:"Bold",
    color:"Blue" 
  }



  
  render()
  {

    return <div className='App'>
      <h1 style={this.styles}>Welcome</h1>
       {/* <NewComp/>
      <Counter />
      <Hook />
      <Timer/>
      <EventChange/>
      <Checkbox />
      <OnClickEvent />
      <ArrayList/>
      <ListByHook/>
      <UseList/> 
     
      <RadioChecbox />  */}
      {/* <TreeTable />  */}
      {/* <EditTable /> */}
      {/* < Car />
      <Parent /> */}
      {/* <Sports /> */}
      {/* <BasicTable/>  */}
      {/* <StudentCrud/> */}
      <StudentProject/>
      {/* <UseSelectorRedux/> */}
    </div>
  }
}

export default App;
