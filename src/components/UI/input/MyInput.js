import React from 'react';
import './myInput.css'

const MyInput = ({children}) => {
    return (
        <input className='myInput'>
            {children}
        </input>
    );
};

export default MyInput;