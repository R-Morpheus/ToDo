import React, {useContext, useState} from 'react';
import './todoTitle.css'
import storeApi from "../store/storeApi";

const TodoTitle = ({title, listId}) => {
    const [open, setOpen] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const {updateListTitle} = useContext(storeApi)

    const handleOnChange = (e) => {
        setNewTitle(e.target.value)
    }
    const handleOnBlur = () => {
        updateListTitle(newTitle, listId)
        setOpen(false)
    }

    return (
        <div className='list__title'>
            {open ? (
                <div>
                    <input
                        onChange={handleOnChange}
                        autoFocus
                        className='list__input'
                        value={newTitle}
                        onBlur={handleOnBlur}
                    />
                </div>
            ) : (
                <div>
                    <h3 onClick={() => setOpen(!open)}>{title}</h3>
                </div>
            )}
        </div>
    );
};

export default TodoTitle;