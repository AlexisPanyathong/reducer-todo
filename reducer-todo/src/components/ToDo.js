import React from 'react';



const ToDo = props => {

    return (
        <div
        className={`item${props.state.completed ? ` completed` : ''}`}
        
        >
            <p>{props.state.task}</p>
        </div> 
            
        
    )
};

export default ToDo;