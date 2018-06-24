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

  ]
}


//become method.
switchNameHandler = () => {
  console.log("se hizo clic aquí");
} 

//<button onClick={this.switchNameHandler()}>Switch Name</button>
//line 28 is example of line 39. do not use () this will execute im·me·di·ate·ly once react renders this to the DOM. We only want to pass a reference. 

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
