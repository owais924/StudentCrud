import React, { Component } from 'react';
  

class OnClickEvent extends Component {
  
    constructor(props) {
      super(props);
      this.state={
       inputValue:'owais',
      }
      this.handleInputChange =this.handleInputChange.bind(this);
      this.sayHello = this.sayHello.bind(this);
    
    }
    handleInputChange(event){
  
       this.setState({inputValue: event.target.value});
     }

  sayHello() {
    console.log(this.state.inputValue)
    alert(`Hello ${this.state.inputValue}` );//kisi b object ko string k sath print karwana ho
  }

  say1Hello() {
    alert('Hello!1');
  }
  render(){

      return (
          <div className='OnClickEvent'>
               
             <input
                type="text"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                placeholder="Type your name"
             />

        
              <button onClick={this.sayHello}>
                 Click me!
              </button>
              
            </div>
        );
    }
}

export default OnClickEvent;