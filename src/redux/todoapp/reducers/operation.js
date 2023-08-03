import { ADD_TODO, DELETE_ALL, REMOVE_TODO,UPDATE_TODO } from "../actions/index";
const initialState=[
    {id: 1, todo: 'Raya and the last Dragon', completed: false},
    {id: 2, todo: 'Avatar', completed: false},
    {id: 3, todo: 'Aladin', completed: false},
];

export const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filteredTodos=state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;
            case UPDATE_TODO:
                let data = action.payload;
                const updatedArray=[];
                state.map((item)=>{
                    if(item.id===data.id){
                        item.id = data.id;
                        item.todo = data.todo;
                        item.completed = data.completed;
                    }
                    updatedArray.push(item);
                })
                return updatedArray;
        default: return state;
    }
}