import React from 'react';
import './todoCard.css'
import {Draggable} from "react-beautiful-dnd";

const TodoCard = ({card, index}) => {
    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <div
                    className='card'
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    {card.title}
                </div>
            )}
        </Draggable>
    );
};

export default TodoCard;