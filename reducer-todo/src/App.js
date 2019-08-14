import React, { useReducer } from 'react';

import { reducer, initialState } from './reducers/reducer';

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todo, dispatch] = useReducer(reducer, initialState);

  console.log(dispatch);

  

  

  

  return (
    <div className="App">
      <div className="header">
        <h1>To-Do List</h1>
        <ToDoForm  />
      </div>
    
      {/* <ToDoList todo={todo} />  */}
      
    </div>
  );
}

export default App;
