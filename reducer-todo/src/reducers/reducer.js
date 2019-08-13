
export const initialState = {
    todoData: [
        {
          task: 'Study about Reducers',
          id: 123,
          completed: false
        },
        {
          task: 'Clean Bedroom',
          id: 124,
          completed: false
        },
        {
          task: 'Wash Dishes',
          id: 1235,
          completed: false
      
        },
        {
          task: 'Laundry',
          id: 1246,
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
            return {
                ...state,
                todoData: state.todoData.filter(item => !item.completed)
            };

        default:
        return state;
    }
};

