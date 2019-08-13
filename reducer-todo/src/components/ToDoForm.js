import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';

import ToDo from '../components/ToDo';

const ToDoForm = () => {

    const [newToDo, setNewToDo] = useState('');

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleChanges = event => {
       setNewToDo(event.target.value)
    };

    const addItem = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: newToDo});
        setNewToDo('');
    }
    // const toggleItem = itemId => {
    //     dispatch({ type: 'TOGGLE_ITEM', payload: itemId});
    // };

    // const clearCompleted = event => {
    //     event.preventDefault();
    //     dispatch({ type: 'CLEAR_COMPLETED'});
    // };
    console.log(state);
    return (
        <>
            <form>
                
                <input
                    type="text"
                    value={newToDo}
                    name="todo"
                    onChange={handleChanges}
                />
                <div className="btn-container">
                    <button onClick={addItem}>Add</button>

                </div>
                {state.todoData.map(item => (
                    <ToDo key={item.id} state={item} />
                ))}
            </form>
        </>
    );
    
}

export default ToDoForm;