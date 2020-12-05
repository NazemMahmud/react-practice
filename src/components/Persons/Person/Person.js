import React from 'react';
import './Person.css';
import Radium from 'radium';

function Person(props) {
    const style = {
        '@media(min-width: 500px)': {
            width: '400px'
        }
    };
    return (
        <div className="Person" style={style} >
            <p onClick={props.click}> <b>Name: </b> {props.name} </p>
            <p> <b>Age: </b> {props.age} </p>
            <p> Here {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    ) ;    
}

export default Radium(Person);