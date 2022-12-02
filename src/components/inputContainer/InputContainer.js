import React, {useState} from 'react';
import './inputContainer.css'
import InputCard from "./InputCard";
import {CSSTransition} from "react-transition-group";

const InputContainer = ({listId, type}) => {
    const [open, setOpen] = useState(false)
    const [openInput, setOpenInput] = useState(true)

    const changeInput = () => {
        setOpen(!open)
        setOpenInput(!openInput)
    }
    return (
        <div>
            <CSSTransition classNames='alert' in={openInput} timeout={600} unmountOnExit>
                <div className='inputContainer'>
                    <div onClick={changeInput}>
                        {type === 'card' ? '+ Add card' : '+ Add list'}
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition classNames='alert' in={open} timeout={600} unmountOnExit>
                <InputCard setOpen={setOpen} listId={listId} type={type} openInput={openInput} setOpenInput={setOpenInput}
                onClick={() => setOpenInput(false)}
                />
            </CSSTransition>
        </div>
    );
};

export default InputContainer;