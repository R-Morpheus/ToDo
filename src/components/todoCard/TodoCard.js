import React from 'react';
import './todoCard.css'

const TodoCard = ({card}) => {
    return (
        <div className='card'>
            {card.title}
        </div>
    );
};

export default TodoCard;