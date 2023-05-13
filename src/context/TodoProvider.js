import {useContext, createContext, useReducer, useEffect} from "react";
import {v4 as uuid} from "uuid"

const TodoContext = createContext()

const ACTIONS = {
    ADD_TODO: 'ADD_TODO', TOGGLE_TODO: 'TOGGLE_TODO', DELETE_TODO: 'DELETE_TODO'
}

function todoListReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, {
                id: uuid(), name: action.payload.taskName, date: action.payload.taskDate, completed: false
            }]
        case ACTIONS.TOGGLE_TODO:
            return state.map(todo => {
                // if (todo.id === action.payload.id) {
                    console.log(todo.id , action.payload.id)
                // }
                // return todo
            })
        case ACTIONS.DELETE_TODO:
            return state.map(todo=>console.log("hello") );
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoProvider = ({children}) => {
    const initialTodoValue = [];
    const [todoList, dispatch] = useReducer(todoListReducer, [])

    useEffect(()=> {
        console.log(todoList)
    } ,[todoList])

    const todosNumber = () => {
        return todoList.length;
    }
    const AddTodo = (values) => {
        // const todoItem = JSON.parse(JSON.stringify(values))
        dispatch({type: ACTIONS.ADD_TODO, payload: values})
    }
    const RemoveTodo = (todo) => {
        console.log(todo)
        dispatch({type: ACTIONS.DELETE_TODO, payload: todo.name})
    }

    const ToggleTodo = (todo) => {
        console.log("to do in toggle : ")
        console.log(todo)
        dispatch({type: ACTIONS.TOGGLE_TODO, payload:todo.id})
    }

    const contextValue = {
        todosNumber,
        AddTodo,
        RemoveTodo,
        ToggleTodo,
        todoList
    }

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    )
}


export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;