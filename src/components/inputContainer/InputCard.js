import React, {useContext, useState} from 'react';
import './inputCard.css'
import storeApi from "../store/storeApi";




const InputCard = ({setOpen, listId}) => {
    const [cardTitle, setCardTitle] = useState('')
    const {addCard} = useContext(storeApi)

    const handleOnChange = (e) => {
        setCardTitle(e.target.value)
    }

    const handleBtnConfirm = () => {
        addCard(cardTitle, listId)
        setOpen(false)
    }


    return (
        <div className='inputCard__container'>
            <div>
                <input
                    placeholder='Enter a title...'
                    className='inputCard__input'
                    type="text"
                    onChange={handleOnChange}
                    value={cardTitle}
                />
            </div>
            <div>
                <button
                    className='inputCard__button'
                    onClick={handleBtnConfirm}
                >
                    Add
                </button>
                <button
                    className='inputCard__button'
                    onClick={() => setOpen(false)}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default InputCard;