import {createContext, useContext, useMemo, useReducer} from "react";
import PropTypes from "prop-types";


const AppContext = createContext();
const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO',
    LOGIN_LOGOUT: "login-logout",
    EDIT_TODO: "edit-todo"
}

const reducer = (state, action) => {
    switch (action.type) {
        case  ACTIONS.ADD_TODO :
            return {...state, todo: action.value};
            break;
        case  ACTIONS.DELETE_TODO :
            return {...state, todo: action.value};
            break;
        case  ACTIONS.TOGGLE_TODO :
            return {...state, todo: action.value}
            break;
        case  ACTIONS.EDIT_TODO : {
            return {...state, todo: action.value}
        }
        case  ACTIONS.LOGIN_LOGOUT :
            return {...state, isLogin: action.value}
            break;
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function AppContextController({children}) {
    const initialState = {
        todo: [],
        isLogin: false,
        editing : false
    }
    const [controller, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => [controller, dispatch], [controller, dispatch]);
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>

}

function useAppContextController() {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error(
            "useMaterialUIController should be used inside the MaterialUIControllerProvider."
        );
    }
    return context;
}

AppContext.propTypes = {
    children: PropTypes.node.isRequired,

}

const addTodo = (dispatch, value) => dispatch({type: ACTIONS.ADD_TODO, value})
const removeTodo = (dispatch, value) => dispatch({type: ACTIONS.DELETE_TODO, value})
const toggleTodo = (dispatch, value) => dispatch({type: ACTIONS.TOGGLE_TODO, value})
const editTodo = (dispatch , value) => dispatch({type:ACTIONS.EDIT_TODO , value})
const toggleLogin = (dispatch, value) => dispatch({type: ACTIONS.LOGIN_LOGOUT, value})

export {useAppContextController, AppContextController, addTodo, removeTodo, toggleLogin, toggleTodo , editTodo}