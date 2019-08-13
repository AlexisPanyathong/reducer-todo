import React, { useReducer } from 'react';

import { reducer, initialState } from './reducers/reducer';

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todo, dispatch] = useReducer(reducer, initialState);

  console.log(dispatch);

  // const addItem = (e, item) => {
  //   e.preventDefault();
  //   dispatch({ type: 'ADD_ITEM', payload: item});
    
  // };

  // toggleItem = itemId => {
  //   dispatch({ type: 'TOGGLE_ITEM', payload: itemId});
  // };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED'});
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Testing, hello world!</h1>
        <ToDoForm  />
      </div>
    
      <ToDoList todo={todo} clearCompleted={clearCompleted}/> 
      {/* toggleItem={toggleItem} */}
    </div>
  );
}

export default App;
