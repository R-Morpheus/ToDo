import React, {useState} from 'react';
import './todoTitle.css'
import MyButton from "../UI/button/MyButton";

const TodoTitle = ({title}) => {
    const [open, setOpen] = useState(false)
    return (
        <div className='list__title'>
            {open ? (
                <div>
                    <input
                        autoFocus
                        className='list__input'
                        value={title}
                        onBlur={() => setOpen(!open)}
                    />
                </div>
            ) : (
                <div>
                    <h3 onClick={() => setOpen(!open)}>TODO</h3>
                </div>
            )}
            <MyButton>...</MyButton>
        </div>
    );
};

export default TodoTitle;