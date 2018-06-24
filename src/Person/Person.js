

import React from 'react';


const person = (props) => {

    return (
        <div>
    <p> Alien Power!  I'm {props.name}   I have    {props.age}     years old!</p>
    <p>{props.children}</p>

        </div>
    )
};

//props.
//what we output is defined by this component. 
//we take it to app.js
//we don't use state here. we use function syntax. we use props. 


export default person;

