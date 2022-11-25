import React, {useState} from "react";
import {v4 as uuid} from 'uuid'
import store from "./components/store/store";
import StoreApi from "./components/store/storeApi";
import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todoList/TodoList";
import './styles/App.css';

function App() {
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
  return (
      <StoreApi.Provider value={{addCard}}>
          <div className="App">
              <Navbar/>
              {data.listIds.map(listId => {
                  const list = data.lists[listId]
                  return <TodoList list={list} key={listId}/>
              })}
          </div>
      </StoreApi.Provider>
  );
}

export default App;
