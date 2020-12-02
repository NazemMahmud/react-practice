import React from 'react';

function Person(props) {
    return (
        <div onClick={props.click}>
            <p> <b>Name: </b> {props.name} </p>
            <p> <b>Age: </b> {props.age} </p>
        </div>
    ) ;    
}

export default Person;