import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/Reducers';

const ToDoForm = () => {
    const [newToDo, setNewToDo] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewToDo(e.target.value);
    }


    return (
        <>
            <form>
                <input
                    type="text"
                    value={newToDo}
                    name="todo"
                    onChange={handleChanges}
                />
            </form>
        </>
    );

};

export default ToDoForm;
