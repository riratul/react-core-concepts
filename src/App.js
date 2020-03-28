import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let person={
      name: "Rayatul",
      phone: "23423423"
  }
  let style={
    color:"red",
    backgroundColor:"yellow"
  }

  const peoples = ["Rafat", "Kamal"]


  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit Done and save to reload.
        </p>
      <h1 style={style}>Name: {person.name + " " + person.phone}</h1>
       <p>My first React Paragraph</p>

       <h2 style={{color:"white",backgroundColor:"black", padding:"10px"}}>Arlin</h2>

       <Person name="Rubel" age="23"></Person>
       <Person name={peoples[0]} age="30"></Person>

      </header>
    </div>
  );
}

function Person(props){
    const personStyle={
      border:'2px solid red', 
      margin:'10px'

    }
    


    console.log(props)
    return (
      <div style={personStyle}>
        <h1>Name: {props.name}</h1>
        <h3>Age: {props.age}</h3>
        
      </div>

    )
}

export default App;
