import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';


function App() {
  const [persons, setPersons] = useState(
    [
      { name: "Max", age:"12" }, 
      { name: "Jack", age:"24" }, 
      { name: "John", age:"30" }, 
    ]
  );

  const switchName = (newName) => {
    // alert('Clicked!! ', newName);
    setPersons([
      { name: newName, age:"17" }, 
      { name: "Jack Ryan", age:"26" }, 
      { name: "John Mark", age:"34" }, 
    ]);
  }

  return (
    <div className="App">
      <h1>HI Start!</h1>
      {/* <button onClick={switchName('Sad')} >Switch Name</button> */}
      <Person 
        name={ persons[0].name } 
        age={persons[0].age} 
        />
      <Person 
        name={ persons[1].name } 
        age={persons[1].age} 
        click={switchName.bind(this, 'Bal')}
        />
      <Person 
        name={ persons[2].name } 
        age={persons[2].age} />
    </div>
  );
}

export default App;
