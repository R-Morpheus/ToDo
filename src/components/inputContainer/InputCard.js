import React from 'react';
import './inputCard.css'
const InputCard = ({setOpen}) => {
    return (
        <div className='inputCard__container'>
            <div>
                <input
                    placeholder='Введите название...'
                    className='inputCard__input'
                    type="text"
                />
            </div>
            <div>
                <button className='inputCard__button'onClick={() => setOpen(false)}>Add</button>
                <button className='inputCard__button'onClick={() => setOpen(false)}>Close</button>
            </div>
        </div>
    );
};

export default InputCard;