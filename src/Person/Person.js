import React from 'react';
import './Person.css';

function Person(props) {
    return (
        <div className="Person" >
            <p onClick={props.click}> <b>Name: </b> {props.name} </p>
            <p> <b>Age: </b> {props.age} </p>
            <p> Here {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    ) ;    
}

export default Person;