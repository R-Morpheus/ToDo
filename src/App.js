import React, {useState} from "react";
import Navbar from "./components/navbar/Navbar";
import TodoContainer from "./components/todoContainer/TodoContainer";
import './styles/App.css';

function App() {
    const [backgroundImage, setBackgroundImage] = useState('white')
  return (
          <div className='App' style={{backgroundImage: `url(${backgroundImage})`, backgroundColor: backgroundImage}}>
              <Navbar setBackgroundImage={setBackgroundImage} />
              <TodoContainer/>
          </div>
  );
}

export default App;
