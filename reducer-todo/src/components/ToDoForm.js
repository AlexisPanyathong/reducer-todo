import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/Reducers';

import ToDo from './ToDo';
import { Form, Body } from './StyledWidgets';

const ToDoForm = () => {
    const [newToDo, setNewToDo] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewToDo(e.target.value);
    }

    const addItem = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: newToDo});
        setNewToDo('');
    }

    const toggleItem = itemId => {
        console.log(itemId);
        dispatch({ type: 'TOOGLE_ITEM', payload: itemId});
    }

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({ type: 'CLEAR_COMPLETED'});
    }
    console.log(state);

    return (
        <Body>
            <Form>
                <form>
                    <input
                        type="text"
                        value={newToDo}
                        name="todo"
                        onChange={handleChanges}
                    />

                    <div className="add-btn-container">
                        <button onClick={addItem}>Add Item</button>
                    </div>

                    {state.todoData.map(item => (
                        <ToDo key={item.id} state={item} toggleItem={toggleItem} />
                    ))}

                    <div className="clear-btn-container">
                        <button onClick={clearCompleted}>Clear Completed</button>
                    </div>
                </form>
            </Form>
        </Body>
    );

};

export default ToDoForm;
