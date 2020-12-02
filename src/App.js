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
  const [persons, setPersons] = useState(
    [
      { name: "Max", age:"12" }, 
      { name: "Jack", age:"24" }, 
      { name: "John", age:"30" }, 
    ]
  );

  const [showPersons, setShowPersons] = useState(false)

  const togglePerson = () => {
    const show = showPersons;
    setShowPersons(!show);
    // alert(show);
    // alert(showPersons);
  };

  const switchName = (newName) => {
    // alert('Clicked!! ', newName);
    setPersons([
      { name: newName, age:"17" }, 
      { name: "Jack Ryan", age:"26" }, 
      { name: "John Mark", age:"34" }, 
    ]);
  }

  const nameChange = (event) => {
    // alert('Clicked!! ', newName);
    setPersons([
      { name: 'Damn', age:"17" }, 
      { name: event.target.value, age:"32" }, 
      { name: "John Mark", age:"34" }, 
    ]);
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
      {showPersons ? 
        <div>
        <Person 
          name={ persons[0].name } 
          age={persons[0].age} 
          />
        <Person 
          name={ persons[1].name } 
          age={persons[1].age} 
          click={switchName.bind(this, 'Bal')}
          changed={nameChange}
          />
        <Person 
          name={ persons[2].name } 
          age={persons[2].age} />
      </div>
        : null }
      
      
    </div>
  );
}

export default App;
