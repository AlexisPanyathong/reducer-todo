import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';

import ToDo from '../components/ToDo';

const ToDoForm = () => {

    const [newToDo, setNewToDo] = useState();

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleChanges = event => {
       setNewToDo(event.target.value)
    };

    const addItem = event => {
        event.preventDefualt();
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
            </form>
        </>
    );
    
}

export default ToDoForm;