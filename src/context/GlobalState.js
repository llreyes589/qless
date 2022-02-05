import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    cards: []
}

// create Context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const fetchAllCards = (cards) => {
        dispatch({ type: 'FETCH_CARDS', payload: cards })
    }

    return (
        <GlobalContext.Provider value={{
            cards: state.cards,
            fetchAllCards
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

