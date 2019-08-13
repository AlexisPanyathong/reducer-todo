import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/reducer';


const ToDo = () => {

    const [newToDo, setNewToDo] = useState();

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setNewToDo(e.target.value);
    };

    return (
        <div>
            {!state.add ? (
                <div>
                    {state.todo}{''} 
                    <input 
                        className="add" onClick={() => dispatch({ type: 'ADD_ITEM'})} 
                    />
                </div>
            ) : (
                <div>
                    <input
                        className="add-item"
                        type="text"
                        name="newToDo"
                        value={newToDo}
                        onChange={handleChanges}
                    />
                    <button
                    onClick={() => 
                        dispatch({ type: 'ADD_ITEM', payload: newToDo})
                    } 
                    >
                       Add 
                    </button>
                </div>
            )}
        </div>
    )
};

export default ToDo;