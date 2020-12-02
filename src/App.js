import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';


function App() {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  }
  // All state variables
  // State 1
  const [persons, setPersons] = useState(
    [
      { name: "Max", age:"12" }, 
      { name: "Jack", age:"24" }, 
      { name: "John", age:"30" }, 
    ]
  );

  // State 2
  const [showPersons, setShowPersons] = useState(false)
  
  // change value of State 1
  const switchName = (newName) => {
    // alert('Clicked!! ', newName);
    setPersons([
      { name: newName, age:"17" }, 
      { name: "Jack Ryan", age:"26" }, 
      { name: "John Mark", age:"34" }, 
    ]);
  }
// change value of State 1: two way binding
  const nameChange = (event) => {
    // alert('Clicked!! ', newName);
    setPersons([
      { name: 'Damn', age:"17" }, 
      { name: event.target.value, age:"32" }, 
      { name: "John Mark", age:"34" }, 
    ]);
  }


 // using IF condition: Show hide section
  const togglePerson = () => {
    const show = showPersons;
    setShowPersons(!show); //
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
    allPersons = (
      <div>
          { persons.map( (person, index) => {
            return <Person 
                  click={() => deletePerson(index)}
                  name={ person.name } 
                  age={person.age} />
          }) }
        
        {/* <Person 
          name={ persons[1].name } 
          age={persons[1].age} 
          click={switchName.bind(this, 'Bal')}
          changed={nameChange}
          /> */}
      </div>
    );
  }


  return (
    <div className="App">
      <h1>HI Start!</h1>
      <button 
        style={style} 
        onClick={togglePerson}
      >
        Toggle person
      </button>
      {allPersons }
    </div>
  );
}

export default App;
