import React from 'react';
import ToDo from './ToDo';


const ToDoList = props => {
    return (
        <div className= "todo-list">
            {/* {props.todo.map(item =>(
                <ToDo key={item.id} item={item} toggleItem={props.toggleItem} />

            ))} */}

            <button className= "clear-btn" onClick={props.clearCompleted}>
            Clear Completed
            </button>
        </div>
    );
};

export default ToDoList;
