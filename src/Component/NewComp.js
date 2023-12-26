import React, {Component} from "react";



class NewComp extends Component{
    constructor(props){
    super(props);

    this.state={
     message: "Subscribe To Simplelearn"
    };
    

    

  }
  render()
  {
     return(

          <div className="App">
            <h3>{this.state.message}</h3>
         
          </div>
     );
  }
}
export default NewComp;