import React from 'react';

function Person(props) {
    return (
        <div >
            <p onClick={props.click}> <b>Name: </b> {props.name} </p>
            <p> <b>Age: </b> {props.age} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    ) ;    
}

export default Person;