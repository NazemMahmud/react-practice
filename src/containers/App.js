import React, {useState} from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Radium, { StyleRoot } from 'radium';

function App() {
  // All state variables
  // State 1
  const [persons, setPersons] = useState(
    [
      { id: 'asadsa1', name: "Max", age:"12" }, 
      { id: 'asadsa2', name: "Jack", age:"24" }, 
      { id: 'asadsa3', name: "John", age:"30" }, 
    ]
  );

  // State 2
  const [showPersons, setShowPersons] = useState(false)
  
  // change value of State 1
  const switchName = (newName) => {
    // alert('Clicked!! ', newName);
    setPersons([
      { id: 'asadsa1', name: newName, age:"17" }, 
      { id: 'asadsa2', name: "Jack Ryan", age:"26" }, 
      { id: 'asadsa3', name: "John Mark", age:"34" }, 
    ]);
  }
// change value of State 1: two way binding
  const nameChange = (event, id) => {
    const personIndex = persons.findIndex( p => p.id === id);
    const person = {  ...persons[personIndex] };
    // another approach
    // const person = Object.assign({}, persons[personIndex]);
    person.name = event.target.value;
    const allpersons = [...persons];
    allpersons[personIndex] = person;
    setPersons(allpersons);
  }


 // using IF condition: Show hide section
  const togglePerson = () => {
    const show = showPersons;
    setShowPersons(!show); 
  };

  // Use of state with list dynamically: delete action: 
  const deletePerson = (personIndex) => {
    const allpersons = [...persons];
    allpersons.splice(personIndex, 1);
    setPersons(allpersons);
    console.log(allpersons);
  }

  let allPersons = null;
  /**
   * if i call a method like this: click={() => deletePerson(index)}
   * no need to bind like following: 
   * click={switchName.bind(this, 'Bal')}
   */
  if(showPersons) {
    allPersons = <Persons 
          persons={persons}
          deletePerson={deletePerson}
          nameChange={nameChange}
        />
      ; 
  }

  return (
    <StyleRoot>
      <div className="App">
        <Cockpit 
          showPersons={showPersons}
          persons={persons}
          togglePerson={togglePerson}
        />
        {allPersons }
      </div>
    </StyleRoot>
  );
}

export default Radium(App) ;