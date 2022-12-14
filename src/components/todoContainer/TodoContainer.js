import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'
import store from '../store/store';
import TodoList from "../todoList/TodoList";
import StoreApi from "../store/storeApi";
import InputContainer from "../inputContainer/InputContainer";
import './todoContainer.css'
import {DragDropContext, Droppable} from "react-beautiful-dnd";

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
    };

    const updateListTitle = (title, listId) => {
        const list = data.lists[listId];
        list.title = title;

        const newState = {
            ...data,
            lists: {
                ...data.lists,
                [listId]: list,
            },
        };
        setData(newState);
    }

    const onDragEnd = (result) => {
        const {destination, source, draggableId, type} = result
        console.log('destination', destination, 'source', source, draggableId);

        if (!destination){
            return
        }

        if (type === 'list'){
            const newListIds = data.listIds
            newListIds.splice(source.index, 1)
            newListIds.splice(destination.index, 0, draggableId)
            return;
        }
        const sourceList = data.lists[source.droppableId];
        const destinationList = data.lists[destination.droppableId];
        const draggingCard = sourceList.cards.filter(
            (card) => card.id === draggableId
        )[0];

        if (source.droppableId === destination.droppableId) {
            sourceList.cards.splice(source.index, 1)
            destinationList.cards.splice(destination.index, 0, draggingCard)
            const newState = {
                ...data,
                lists: {
                    ...data.lists,
                    [sourceList.id]: destinationList,
                },
            }
            setData(newState)
        } else {
            sourceList.cards.splice(source.index, 1)
            destinationList.cards.splice(destination.index, 0, draggingCard)

            const newState = {
                ...data,
                lists: {
                    ...data.lists,
                    [sourceList.id]: sourceList,
                    [destinationList.id]: destinationList,
                },
            }
            setData(newState)
        }

    };

    return (
        <StoreApi.Provider value={{addCard, addList, updateListTitle}}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='todoContainer' type='list' direction='horizontal'>
                    {(provided) => (
                        <div className='todoContainer' ref={provided.innerRef} {...provided.droppableProps}>
                            {data.listIds.map((listId, index) => {
                                const list = data.lists[listId]
                                return <TodoList list={list} key={listId} index={index}/>
                            })}
                            <InputContainer type='list'/>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </StoreApi.Provider>
    );
};

export default TodoContainer;