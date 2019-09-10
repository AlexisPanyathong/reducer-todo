import React from 'react';
import ToDoForm from './components/ToDoForm';

import { Header } from './components/StyledWidgets';

const App = () => {
  

  return (
      
      <div className="App">
          <Header>
            <h1>Welcome to Your To-Do List</h1>
          </Header>

          <ToDoForm />
        
      </div>
    
  );
}

export default App;
