import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    cards: [],
    fare_matrix: [
        {line: 1, stations: [
            'BACLARAN', 
            'EDSA', 
            'LIBERTAD', 
            'GIL PUYAT', 
            'V. CRUZ', 
            'QUIRINO', 
            'PEDRO GIL',
            'UNITED NATIONS',
            'CENTRAL TERMINAL',
            'CARRIEDO',
            'D. JOSE',
            'BAMBANG',
            'TAYUMAN',
            'BLUMENTRITT',
            'A. SANTOS',
            'R. PAPA',
            '5TH AVENUE',
            'MONUMENTO',
            'BALINTAWAK',
            'ROOSEVELT'
        ]},
        {line: 2, stations: [
            'RECTO',
            'LEGARDA',
            'PUREZA',
            'V.MAPA',
            'J.RUIZ',
            'GILMORE',
            'BETTY-GO',
            'CUBAO',
            'ANONAS',
            'KATIPUNAN',
            'SANTOLAN'
        ]},
    ],

    fares: [
        {entry: 'BACLARAN', exit: 'BACLARAN', fare: 11},
        {entry: 'BACLARAN', exit: 'EDSA', fare: 12},
        {entry: 'BACLARAN', exit: 'LIBERTAD', fare: 13},
        {entry: 'BACLARAN', exit: 'GIL PUYAT', fare: 13},
        {entry: 'BACLARAN', exit: 'V. CRUZ', fare: 14},
        {entry: 'BACLARAN', exit: 'QUIRINO', fare: 15},
        {entry: 'BACLARAN', exit: 'PEDRO GIL', fare: 16},
        {entry: 'BACLARAN', exit: 'UNITED NATIONS', fare: 17},
        {entry: 'BACLARAN', exit: 'CENTRAL TERMINAL', fare: 18},
        {entry: 'BACLARAN', exit: 'CARRIEDO', fare: 19},
        {entry: 'BACLARAN', exit: 'D. JOSE', fare: 19},
        {entry: 'BACLARAN', exit: 'BAMBANG', fare: 20},
        {entry: 'BACLARAN', exit: 'TAYUMAN', fare: 21},
        {entry: 'BACLARAN', exit: 'BLUMENTRITT', fare: 21},
        {entry: 'BACLARAN', exit: 'A. SANTOS', fare: 22},
        {entry: 'BACLARAN', exit: 'R. PAPA', fare: 23},
        {entry: 'BACLARAN', exit: '5TH AVENUE', fare: 24},
        {entry: 'BACLARAN', exit: 'MONUMENTO', fare: 25},
        {entry: 'BACLARAN', exit: 'BALINTAWAK', fare: 27},
        {entry: 'BACLARAN', exit: 'ROOSEVELT', fare: 29},

        {entry: 'EDSA', exit: 'BACLARAN', fare: 12},
        {entry: 'EDSA', exit: 'EDSA', fare: 11},
        {entry: 'EDSA', exit: 'LIBERTAD', fare: 12},
        {entry: 'EDSA', exit: 'GIL PUYAT', fare: 13},
        {entry: 'EDSA', exit: 'V. CRUZ', fare: 14},
        {entry: 'EDSA', exit: 'QUIRINO', fare: 15},
        {entry: 'EDSA', exit: 'PEDRO GIL', fare: 15},
        {entry: 'EDSA', exit: 'UNITED NATIONS', fare: 16},
        {entry: 'EDSA', exit: 'CENTRAL TERMINAL', fare: 17},
        {entry: 'EDSA', exit: 'CARRIEDO', fare: 18},
        {entry: 'EDSA', exit: 'D. JOSE', fare: 19},
        {entry: 'EDSA', exit: 'BAMBANG', fare: 19},
        {entry: 'EDSA', exit: 'TAYUMAN', fare: 20},
        {entry: 'EDSA', exit: 'BLUMENTRITT', fare: 21},
        {entry: 'EDSA', exit: 'A. SANTOS', fare: 22},
        {entry: 'EDSA', exit: 'R. PAPA', fare: 22},
        {entry: 'EDSA', exit: '5TH AVENUE', fare: 23},
        {entry: 'EDSA', exit: 'MONUMENTO', fare: 24},
        {entry: 'EDSA', exit: 'BALINTAWAK', fare: 27},
        {entry: 'EDSA', exit: 'ROOSEVELT', fare: 29},        
    ]
}

// create Context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const fetchAllCards = (cards) => {
        dispatch({ type: 'FETCH_CARDS', payload: cards })
    }

    const contextUpdateCard = (id) => {
        dispatch({type: 'UPDATE_CARD', payload:id})
    }

    const contextAddNewCard = (card) => {
        dispatch({type: 'ADD_CARD', payload:card})
    }
    
    
    const contextAddCardTransaction = (transaction) => {
        dispatch({type: 'UPDATE_CARD_TRANSACTIONS', payload:transaction})
    }


    return (
        <GlobalContext.Provider value={{
            cards: state.cards,
            fares: state.fares,
            fare_matrix: state.fare_matrix,
            fetchAllCards,
            contextUpdateCard,
            contextAddNewCard,
            contextAddCardTransaction

        }}>
            {children}
        </GlobalContext.Provider>
    )
}

