
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
                
                const newItem = {
                  name: action.payload,
                  id: Date.now(),
                  completed: false
                };
            return {
                ...state,
                todo: [...state.todo, newItem]
            };

        case 'TOGGLE_ITEM':
            return {
                ...state,
                todo: state.todo.map(item => {
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
                todo: state.todo.filter(item => !item.completed)
            };

        default:
        return state;
    }
};

