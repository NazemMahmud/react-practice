import React from 'react';
import './Person.css';
import Radium from 'radium';
import Auxiliary from '../../../hoc/Auxiliary'; 

function Person(props) {
    const style = {
        '@media(min-width: 500px)': {
            width: '400px'
        }
    };
    return (
        <Auxiliary >
            <p onClick={props.click}> <b>Name: </b> {props.name} </p>
            <p> <b>Age: </b> {props.age} </p>
            <p> Here {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Auxiliary>
    ) ;    
}

export default Radium(Person);