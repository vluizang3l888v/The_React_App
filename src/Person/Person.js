

import React from 'react';


const person = (props) => {

    return (
        <div>
    <p> Alien Power!  I'm {props.name}   I have    {props.age}     years old!</p>
    <p>{props.children}</p>

        </div>
    )
};




export default person;

