import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'
import store from '../store/store';
import TodoList from "../todoList/TodoList";
import StoreApi from "../store/storeApi";
import InputContainer from "../inputContainer/InputContainer";
import './todoContainer.css'

const TodoContainer = () => {
    const [data, setData] = useState(store)
    const addCard = (title, listId) => {
        const newCardId = uuid()
        const newCard = {
            id: newCardId,
            title,
        }
        const list = data.lists[listId]
        list.cards = [...list.cards, newCard]

        const newState = {
            ...data,
            lists: {
                ...data.lists,
                [listId]: list,
            },
        }
        setData(newState)
    }

    const addList = (title) => {
        const newListId = uuid();
        const newList = {
            id: newListId,
            title,
            cards: [],
        };
        const newState = {
            listIds: [...data.listIds, newListId],
            lists: {
                ...data.lists,
                [newListId]: newList,
            },
        };
        setData(newState);
    }

    return (
        <div className='todoContainer'>
            <StoreApi.Provider value={{addCard, addList}}>
                {data.listIds.map(listId => {
                    const list = data.lists[listId]
                    return <TodoList list={list} key={listId}/>
                })}
                <InputContainer type='list'/>
            </StoreApi.Provider>
        </div>
    );
};

export default TodoContainer;