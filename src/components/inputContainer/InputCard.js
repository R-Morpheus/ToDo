import React, {useContext, useState} from 'react';
import storeApi from "../store/storeApi";
import './inputCard.css'

const InputCard = ({setOpen, listId, type, setOpenInput, openInput}) => {
    const [title, setTitle] = useState('')
    const {addCard, addList} = useContext(storeApi)

    const handleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const handleBtnConfirm = () => {
        if (type === 'card'){
            addCard(title, listId)
            setTitle('')
            setOpen(false)
            setOpenInput(true)
        }
        else{
            addList(title)
            setTitle('')
            setOpen(false)
            setOpenInput(true)
        }
    }

    const returnBtn = () => {
        setOpen(false)
        setOpenInput(true)
    }

    return (
        <div className='inputCard__container'>
            <div>
                <input
                    placeholder={type === 'card' ? 'Enter a title...' : 'Enter a title list...'}
                    className='inputCard__input'
                    type="text"
                    onChange={handleOnChange}
                    onBlur={() => setOpen(false)}
                    value={title}
                />
            </div>
            <div>
                <button
                    className='inputCard__button'
                    onClick={handleBtnConfirm}
                >
                    {type === 'card' ? 'Add card' : 'Add list'}
                </button>
                <button
                    className='inputCard__button'
                    onClick={returnBtn}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default InputCard;