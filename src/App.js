import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



import Person from './Person/Person';



class App extends Component {

state = {
  persons: [
    {name: 'Max', age:23 },
    {name: 'Nando Vlogs', age: 90 },
    {name: 'Kuan Yang', age:30 }
//OVERIDE happen later. 
  ],
  otherState: 'other crazy value'
}


//become method.
switchNameHandler = () => {
  //console.log("se hizo clic aquí");

 // this.state.persons[0].name ='YouTube views'
//don't do the above. line 29- because we should not change the state directly like this REACT will not recognize that. 
this.setState( {
  //setState NOT DEFINED BUT , 'WE' extent Component. -this is made available by React Library
  //setState takes an object as an argument and will merge what ever you define here with existing state.
  // SetState [setState allows us to update special state property] line 13. ['will then ensure that REACT knows about this update and then updates the DOM']
  
  persons: [
    {name: 'Flamingo Vlogs', age:65 },
    {name: 'Nando Vlogs', age: 40 },
    {name: 'Kuan Yang 應對', age:30 }

  ]
})
} 

//<button onClick={this.switchNameHandler()}>Switch Name</button>
//line 28 is example of line 39. do not use () this will execute im·me·di·ate·ly once react renders this to the DOM. We only want to pass a reference. 
//  not many things that lead REACT to update the DOM, only 2 , changing state. & props. 
  render() {
    return (
      //class cannot be used.
     <div className="App">
      <h1>Hello dude</h1> 
      <p>this is working</p>

    
<button onClick={this.switchNameHandler}>Switch Name</button>

      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My Hobbies: Youtube </Person>

      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
     </div>

//Components are the core building block of React apps

     //THIS IS NOT HTML , this is JS in the end, it gets compiled into line 13.
    );
  //return React.createElement('div', {className: 'App'},React.createElement('h1', null,'Does it work?'))
  }
}

export default App;
