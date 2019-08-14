
export const initialState = {
    todoData: [
        {
          task: '',
          id: 123,
          completed: false
        }
       
      ]
}; 

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
                
            return {
                ...state,
                todoData: [...state.todoData, {task: action.payload, completed: false, id: Date.now()}]
            };

        case 'TOGGLE_ITEM':
            return {
                ...state,
                todoData: state.todoData.map(item => {
                    if (action.payload === item.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    }
                    return item;
                })
            };

        case 'CLEAR_COMPLETED':
            console.log(state.todoData.filter(item => !item.completed));
            return {
                ...state,
                todoData: state.todoData.filter(item => !item.completed)
            };

        default:
        return state;
    }
};

