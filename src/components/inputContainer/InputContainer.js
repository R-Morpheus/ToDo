import React, {useState} from 'react';
import './inputContainer.css'
import InputCard from "./InputCard";
import {CSSTransition} from "react-transition-group";

const InputContainer = ({listId, type}) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='inputContainer'>
                <div onClick={() => setOpen(!open)}>
                    {type === 'card' ? '+ Add card' : '+ Add list'}
                </div>
            </div>
            <CSSTransition classNames='alert' in={open} timeout={300} unmountOnExit>
                <InputCard setOpen={setOpen} listId={listId} type={type}/>
            </CSSTransition>
        </div>
    );
};

export default InputContainer;