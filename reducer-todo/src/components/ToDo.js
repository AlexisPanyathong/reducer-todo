import React from 'react';


const ToDo = props => {

    return (
       
            <div 
            onClick={() => props.toggleItem(props.state.id)} className={`item${props.state.completed ? ` completed` : ''}`}
            
            >
                <p>{props.state.task}</p>
            </div> 
        
            
        
    )
};

export default ToDo;