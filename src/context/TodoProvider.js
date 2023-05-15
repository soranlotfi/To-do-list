import {useContext, createContext, useReducer, useEffect, useState} from "react";
import {v4 as uuid} from "uuid"

const TodoContext = createContext()

const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO',
    LOGIN_LOGOUT: "login-logout"
}

function todoReducer(todoList, action) {
    switch (action.type) {
        case  ACTIONS.ADD_TODO :
            return [
                ...todoList,
                {
                    id: uuid(),
                    name: action.payload.taskName,
                    date: action.payload.taskDate,
                    completed: false
                }
            ]
        case ACTIONS.TOGGLE_TODO:
            return todoList.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, completed: !todo.completed}
                }
            })
        default :
            return todoList
    }

}


const TodoProvider = ({children}) => {
    const [LoginInfo, setLoginInfo] = useState(false)
    const [loggedIUserInfo, setLoggedInUserInfo] = useState("")

    function LoginGenerator(LoginData) {
        setLoginInfo(true)
        setLoggedInUserInfo(LoginData)
    }

    function LogoutGenerator() {
        setLoginInfo(false)
    }

    useEffect(() => {
        console.log(LoginInfo)
    }, [LoginInfo])


    const initialTodoValue = ['learn react context api']
    const [todoList, dispatch] = useReducer(todoReducer, initialTodoValue)


    const todosNumber = () => {
        return todoList.length;
    }
    const AddTodo = (values) => {
        dispatch({type: ACTIONS.ADD_TODO, payload: values})
    }
    const RemoveTodo = (todo) => {
        console.log(todo)
        dispatch({type: ACTIONS.DELETE_TODO, payload: todo.name})
    }

    const ToggleTodo = (todo) => {
        console.log("to do in toggle : ")
        console.log(todo.id)
        dispatch({type: ACTIONS.TOGGLE_TODO, payload: todo.id})
    }

    const contextValue = {
        todosNumber,
        AddTodo,
        RemoveTodo,
        ToggleTodo,
        todoList,
        LoginInfo,
        LoginGenerator,
        loggedIUserInfo
    }

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    )
}


export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;