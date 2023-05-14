import {useContext, createContext, useReducer, useEffect} from "react";
import {v4 as uuid} from "uuid"

const TodoContext = createContext()

const ACTIONS = {
    ADD_TODO: 'ADD_TODO', TOGGLE_TODO: 'TOGGLE_TODO', DELETE_TODO: 'DELETE_TODO'
}

function todoReducer(todoList , action){
    switch (action.type){
        case  ACTIONS.ADD_TODO :
            return [
                ...todoList ,
                {
                    id:uuid() ,
                    name:action.payload.taskName,
                    date:action.payload.taskDate,
                    completed:false
                }
                ]
        case ACTIONS.TOGGLE_TODO:
           return  todoList.map(todo => {
                if (todo.id === action.payload.id){
                    console.log("barabar")
                    return  {...todo , completed:!todo.completed}
                }
               console.log("nabarbar")
            })
        default :
            return todoList
    }

}

const TodoProvider = ({children}) => {
    const initialTodoValue = [];
    const [todoList, dispatch] = useReducer(todoReducer, [])

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
        console.log(todo.id)
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