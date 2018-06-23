import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



import Person from './Person/Person';



class App extends Component {
  render() {
    return (
      //class cannot be used.
     <div className="App">
      <h1>Hello dude</h1> 
      <p>this is working</p>
      <Person name="Max" age="23" />

      <Person name="Nando Vlogs" age="90" > My Hobbies: Youtube </Person>

      <Person name="Kuan Yang" age="30" />
     </div>

//Components are the core building block of React apps

     //THIS IS NOT HTML , this is JS in the end, it gets compiled into line 13.
    );
  //return React.createElement('div', {className: 'App'},React.createElement('h1', null,'Does it work?'))
  }
}

export default App;
