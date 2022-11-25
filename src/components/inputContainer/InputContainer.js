import React, {useState} from 'react';
import './inputContainer.css'
import InputCard from "./InputCard";
import {CSSTransition} from "react-transition-group";

const InputContainer = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='inputContainer'>
                <div onClick={() => setOpen(!open)}>
                    + Add card
                </div>
            </div>
            <CSSTransition classNames='alert' in={open} timeout={300} unmountOnExit>
                <InputCard setOpen={setOpen}/>
            </CSSTransition>
        </div>
    );
};

export default InputContainer;