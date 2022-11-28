import React from 'react';
import TodoTitle from "./TodoTitle";
import './todoList.css'
import TodoCard from "../todoCard/TodoCard";
import InputContainer from "../inputContainer/InputContainer";
import {Draggable, Droppable} from "react-beautiful-dnd";

const TodoList = ({list, index}) => {
    return (
        <Draggable draggableId={list.id} index={index}>
            {(provided) => (
                <div className='list__container' ref={provided.innerRef} {...provided.draggableProps}>
                    <div {...provided.dragHandleProps}>
                        <TodoTitle title={list.title} listId={list.id}/>
                        <Droppable droppableId={list.id}>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} className='card__container'>
                                    {list.cards.map((card, index) => (
                                        <TodoCard key={card.id} card={card} index={index}/>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        <InputContainer listId={list.id} type='card'/>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default TodoList;