import React, {useState} from "react";
import './styles/App.css';
import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todoList/TodoList";
import store from "./components/store/store";

function App() {
    const [data, setData] = useState(store)
  return (
    <div className="App">
        <Navbar/>
        {data.listIds.map(listId => {
            const list = data.lists[listId]
            return <TodoList list={list} key={listId}/>
        })}
    </div>
  );
}

export default App;
