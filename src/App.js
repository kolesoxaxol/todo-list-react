import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";


function App() {
  return (
    <div className="container">
      <div className="row">
      <TodoInput />   
        <TodoList/>
      
      
      </div>

    </div>
  );
}

export default App;
