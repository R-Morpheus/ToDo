import React from 'react';
import TodoTitle from "./TodoTitle";
import './todoList.css'
import TodoCard from "../todoCard/TodoCard";
import InputContainer from "../inputContainer/InputContainer";

const TodoList = ({list}) => {
    return (
        <div className='list__container'>
            <TodoTitle title={list.title}/>
            {list.cards.map((card) => (
                <TodoCard key={card.id} card={card}/>
            ))}
            <InputContainer/>
        </div>
    );
};

export default TodoList;