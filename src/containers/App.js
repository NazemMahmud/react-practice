import React, {Component} from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  // All state variables
  state = {
    persons: [
      { id: 'asadsa1', name: "Max", age:"12" }, 
      { id: 'asadsa2', name: "Jack", age:"24" }, 
      { id: 'asadsa3', name: "John", age:"30" },
    ],
    otherState: 'some other value',
    showPersons: false,
    changeCounter: 0
  }

  // change value of State 1: two way binding
  nameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => p.id === id);
    const person = {  ...this.state.persons[personIndex] };
    // another approach
    // const person = Object.assign({}, persons[personIndex]);
    person.name = event.target.value;
    const allpersons = [...this.state.persons];
    allpersons[personIndex] = person;
    this.setState((prevState, props) => {
        return {
          persons: allpersons,
          changeCounter: prevState.changeCounter+1
        }
    });
  }

  // Use of state with list dynamically: delete action: 
  deletePerson = (personIndex) => {
    const allpersons = [...this.state.persons];
    allpersons.splice(personIndex, 1);
    this.setState({persons: allpersons});
  }

  // using IF condition: Show hide section
  togglePerson = () => {
    const show = this.state.showPersons;
    this.setState({showPersons: !show}); 
  };
  
  // change value of State 1
  switchName = (newName) => {
    const person = [
      { id: 'asadsa1', name: newName, age:"17" }, 
      { id: 'asadsa2', name: "Jack Ryan", age:"26" }, 
      { id: 'asadsa3', name: "John Mark", age:"34" }, 
    ];
    this.setState({persons: person});
  }
  
  render(){
    let allPersons = null;

    if(this.state.showPersons) {
      allPersons = <Persons 
            persons={this.state.persons}
            deletePerson={this.deletePerson}
            nameChange={this.nameChange}
          />
        ; 
    }
  /**
   * if i call a method like this: click={() => deletePerson(index)}
   * no need to bind like following: 
   * click={switchName.bind(this, 'Bal')}
   */
    return (
      <StyleRoot>
        <div className="App">
          <Cockpit 
            showPersons={this.state.showPersons}
            personLength={this.state.persons.length}
            togglePerson={this.togglePerson}
          />
          {allPersons }
        </div>
      </StyleRoot>
    );
  }
  
}

export default Radium(App) ;
