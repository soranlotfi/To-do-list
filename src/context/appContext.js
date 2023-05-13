import {useReducer, createContext, useContext, useMemo} from "react";
import PropTypes from "prop-types";

const AppContext = createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case "TEST":
            return {...state, test: action.value}
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

function AppContextController({children}) {

    const initialState = {
        test: true,
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
const setTest = (dispatch, value) => dispatch({type: "TEST", value})

export {useAppContextController, setTest, AppContextController}