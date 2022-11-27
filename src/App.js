import React from "react";
import Navbar from "./components/navbar/Navbar";
import TodoContainer from "./components/todoContainer/TodoContainer";
import './styles/App.css';

function App() {

  return (
          <div className='App'>
              <Navbar/>
              <TodoContainer/>
          </div>
  );
}

export default App;
