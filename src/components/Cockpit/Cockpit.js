import React from 'react';
import './Cockpit.css';

function Cockpit(props){
    const style = {
        backgroundColor: 'red',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      }

    const classes = [];
    if(props.showPersons) {
        style.backgroundColor = 'green';
        style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
        };
    }   

    if(props.personLength <=2) classes.push('red');
    if(props.personLength <=1) classes.push('bold');

    return (
       <div>
           <p className={classes.join(' ')} >HI Start!</p>
            <button 
                style={style} 
                onClick={props.togglePerson}
            >
                Toggle person
            </button>
       </div>
    )
}


  export default React.memo(Cockpit);