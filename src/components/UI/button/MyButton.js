import React from 'react';
import "./myButton.css"

const MyButton = ({children}) => {
    return (
        <button className='myButton'>
            {children}
        </button>
    );
};

export default MyButton;