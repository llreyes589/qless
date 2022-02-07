import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    cards: [],
    fare_matrix: [
        {
            line: 1, stations: [
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
            ]
        },
        {
            line: 2, stations: [
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
            ]
        },
    ],

    fares: [
        { entry: 'BACLARAN', exit: 'BACLARAN', fare: 11 },

        { entry: 'EDSA', exit: 'BACLARAN', fare: 12 },
        { entry: 'EDSA', exit: 'EDSA', fare: 11 },

        { entry: 'LIBERTAD', exit: 'BACLARAN', fare: 13 },
        { entry: 'LIBERTAD', exit: 'EDSA', fare: 12 },
        { entry: 'LIBERTAD', exit: 'LIBERTAD', fare: 11 },

        { entry: 'GIL PUYAT', exit: 'BACLARAN', fare: 13 },
        { entry: 'GIL PUYAT', exit: 'EDSA', fare: 13 },
        { entry: 'GIL PUYAT', exit: 'LIBERTAD', fare: 12 },
        { entry: 'GIL PUYAT', exit: 'GIL PUYAT', fare: 11 },

        { entry: 'V. CRUZ', exit: 'BACLARAN', fare: 14 },
        { entry: 'V. CRUZ', exit: 'EDSA', fare: 14 },
        { entry: 'V. CRUZ', exit: 'LIBERTAD', fare: 13 },
        { entry: 'V. CRUZ', exit: 'GIL PUYAT', fare: 12 },
        { entry: 'V. CRUZ', exit: 'V. CRUZ', fare: 11 },

        { entry: 'QUIRINO', exit: 'BACLARAN', fare: 15 },
        { entry: 'QUIRINO', exit: 'EDSA', fare: 15 },
        { entry: 'QUIRINO', exit: 'LIBERTAD', fare: 14 },
        { entry: 'QUIRINO', exit: 'GIL PUYAT', fare: 13 },
        { entry: 'QUIRINO', exit: 'V. CRUZ', fare: 12 },
        { entry: 'QUIRINO', exit: 'QUIRINO', fare: 11 },

        { entry: 'PEDRO GIL', exit: 'BACLARAN', fare: 16 },
        { entry: 'PEDRO GIL', exit: 'EDSA', fare: 15 },
        { entry: 'PEDRO GIL', exit: 'LIBERTAD', fare: 14 },
        { entry: 'PEDRO GIL', exit: 'GIL PUYAT', fare: 14 },
        { entry: 'PEDRO GIL', exit: 'V. CRUZ', fare: 13 },
        { entry: 'PEDRO GIL', exit: 'QUIRINO', fare: 12 },
        { entry: 'PEDRO GIL', exit: 'PEDRO GIL', fare: 11 },

        { entry: 'UNITED NATIONS', exit: 'BACLARAN', fare: 17 },
        { entry: 'UNITED NATIONS', exit: 'EDSA', fare: 16 },
        { entry: 'UNITED NATIONS', exit: 'LIBERTAD', fare: 15 },
        { entry: 'UNITED NATIONS', exit: 'GIL PUYAT', fare: 14 },
        { entry: 'UNITED NATIONS', exit: 'V. CRUZ', fare: 13 },
        { entry: 'UNITED NATIONS', exit: 'QUIRINO', fare: 13 },
        { entry: 'UNITED NATIONS', exit: 'PEDRO GIL', fare: 12 },
        { entry: 'UNITED NATIONS', exit: 'UNITED NATIONS', fare: 11 },

        { entry: 'CENTRAL TERMINAL', exit: 'BACLARAN', fare: 18 },
        { entry: 'CENTRAL TERMINAL', exit: 'EDSA', fare: 17 },
        { entry: 'CENTRAL TERMINAL', exit: 'LIBERTAD', fare: 16 },
        { entry: 'CENTRAL TERMINAL', exit: 'GIL PUYAT', fare: 16 },
        { entry: 'CENTRAL TERMINAL', exit: 'V. CRUZ', fare: 15 },
        { entry: 'CENTRAL TERMINAL', exit: 'QUIRINO', fare: 14 },
        { entry: 'CENTRAL TERMINAL', exit: 'PEDRO GIL', fare: 13 },
        { entry: 'CENTRAL TERMINAL', exit: 'UNITED NATIONS', fare: 12 },
        { entry: 'CENTRAL TERMINAL', exit: 'CENTRAL TERMINAL', fare: 11 },

        { entry: 'CARRIEDO', exit: 'BACLARAN', fare: 19 },
        { entry: 'CARRIEDO', exit: 'EDSA', fare: 18 },
        { entry: 'CARRIEDO', exit: 'LIBERTAD', fare: 17 },
        { entry: 'CARRIEDO', exit: 'GIL PUYAT', fare: 16 },
        { entry: 'CARRIEDO', exit: 'V. CRUZ', fare: 15 },
        { entry: 'CARRIEDO', exit: 'QUIRINO', fare: 14 },
        { entry: 'CARRIEDO', exit: 'PEDRO GIL', fare: 14 },
        { entry: 'CARRIEDO', exit: 'UNITED NATIONS', fare: 13 },
        { entry: 'CARRIEDO', exit: 'CENTRAL TERMINAL', fare: 12 },
        { entry: 'CARRIEDO', exit: 'CARRIEDO', fare: 11 },

        { entry: 'D. JOSE', exit: 'BACLARAN', fare: 19 },
        { entry: 'D. JOSE', exit: 'EDSA', fare: 19 },
        { entry: 'D. JOSE', exit: 'LIBERTAD', fare: 18 },
        { entry: 'D. JOSE', exit: 'GIL PUYAT', fare: 17 },
        { entry: 'D. JOSE', exit: 'V. CRUZ', fare: 16 },
        { entry: 'D. JOSE', exit: 'QUIRINO', fare: 15 },
        { entry: 'D. JOSE', exit: 'PEDRO GIL', fare: 14 },
        { entry: 'D. JOSE', exit: 'UNITED NATIONS', fare: 14 },
        { entry: 'D. JOSE', exit: 'CENTRAL TERMINAL', fare: 12 },
        { entry: 'D. JOSE', exit: 'CARRIEDO', fare: 12 },
        { entry: 'D. JOSE', exit: 'D. JOSE', fare: 11 },

        { entry: 'BAMBANG', exit: 'BACLARAN', fare: 20 },
        { entry: 'BAMBANG', exit: 'EDSA', fare: 19 },
        { entry: 'BAMBANG', exit: 'LIBERTAD', fare: 18 },
        { entry: 'BAMBANG', exit: 'GIL PUYAT', fare: 18 },
        { entry: 'BAMBANG', exit: 'V. CRUZ', fare: 17 },
        { entry: 'BAMBANG', exit: 'QUIRINO', fare: 16 },
        { entry: 'BAMBANG', exit: 'PEDRO GIL', fare: 15 },
        { entry: 'BAMBANG', exit: 'UNITED NATIONS', fare: 14 },
        { entry: 'BAMBANG', exit: 'CENTRAL TERMINAL', fare: 13 },
        { entry: 'BAMBANG', exit: 'CARRIEDO', fare: 12 },
        { entry: 'BAMBANG', exit: 'D. JOSE', fare: 12 },
        { entry: 'BAMBANG', exit: 'BAMBANG', fare: 11 },

        { entry: 'TAYUMAN', exit: 'BACLARAN', fare: 21 },
        { entry: 'TAYUMAN', exit: 'EDSA', fare: 20 },
        { entry: 'TAYUMAN', exit: 'LIBERTAD', fare: 19 },
        { entry: 'TAYUMAN', exit: 'GIL PUYAT', fare: 18 },
        { entry: 'TAYUMAN', exit: 'V. CRUZ', fare: 17 },
        { entry: 'TAYUMAN', exit: 'QUIRINO', fare: 16 },
        { entry: 'TAYUMAN', exit: 'PEDRO GIL', fare: 16 },
        { entry: 'TAYUMAN', exit: 'UNITED NATIONS', fare: 15 },
        { entry: 'TAYUMAN', exit: 'CENTRAL TERMINAL', fare: 14 },
        { entry: 'TAYUMAN', exit: 'CARRIEDO', fare: 13 },
        { entry: 'TAYUMAN', exit: 'D. JOSE', fare: 12 },
        { entry: 'TAYUMAN', exit: 'BAMBANG', fare: 12 },
        { entry: 'TAYUMAN', exit: 'TAYUMAN', fare: 11 },

        
        { entry: 'BLUMENTRITT', exit: 'BACLARAN', fare: 21 },
        { entry: 'BLUMENTRITT', exit: 'EDSA', fare: 21 },
        { entry: 'BLUMENTRITT', exit: 'LIBERTAD', fare: 20 },
        { entry: 'BLUMENTRITT', exit: 'GIL PUYAT', fare: 19 },
        { entry: 'BLUMENTRITT', exit: 'V. CRUZ', fare: 18 },
        { entry: 'BLUMENTRITT', exit: 'QUIRINO', fare: 17 },
        { entry: 'BLUMENTRITT', exit: 'PEDRO GIL', fare: 16 },
        { entry: 'BLUMENTRITT', exit: 'UNITED NATIONS', fare: 16 },
        { entry: 'BLUMENTRITT', exit: 'CENTRAL TERMINAL', fare: 14 },
        { entry: 'BLUMENTRITT', exit: 'CARRIEDO', fare: 14 },
        { entry: 'BLUMENTRITT', exit: 'D. JOSE', fare: 13 },
        { entry: 'BLUMENTRITT', exit: 'BAMBANG', fare: 12 },
        { entry: 'BLUMENTRITT', exit: 'TAYUMAN', fare: 12 },
        { entry: 'BLUMENTRITT', exit: 'BLUMENTRITT', fare: 11 },

        { entry: 'A. SANTOS', exit: 'BACLARAN', fare: 22 },
        { entry: 'A. SANTOS', exit: 'EDSA', fare: 22 },
        { entry: 'A. SANTOS', exit: 'LIBERTAD', fare: 21 },
        { entry: 'A. SANTOS', exit: 'GIL PUYAT', fare: 20 },
        { entry: 'A. SANTOS', exit: 'V. CRUZ', fare: 19 },
        { entry: 'A. SANTOS', exit: 'QUIRINO', fare: 18 },
        { entry: 'A. SANTOS', exit: 'PEDRO GIL', fare: 17 },
        { entry: 'A. SANTOS', exit: 'UNITED NATIONS', fare: 17 },
        { entry: 'A. SANTOS', exit: 'CENTRAL TERMINAL', fare: 15 },
        { entry: 'A. SANTOS', exit: 'CARRIEDO', fare: 15 },
        { entry: 'A. SANTOS', exit: 'D. JOSE', fare: 14 },
        { entry: 'A. SANTOS', exit: 'BAMBANG', fare: 13 },
        { entry: 'A. SANTOS', exit: 'TAYUMAN', fare: 13 },
        { entry: 'A. SANTOS', exit: 'BLUMENTRITT', fare: 12 },
        { entry: 'A. SANTOS', exit: 'A. SANTOS', fare: 11 },

        { entry: 'R. PAPA', exit: 'BACLARAN', fare: 23 },
        { entry: 'R. PAPA', exit: 'EDSA', fare: 22 },
        { entry: 'R. PAPA', exit: 'LIBERTAD', fare: 21 },
        { entry: 'R. PAPA', exit: 'GIL PUYAT', fare: 21 },
        { entry: 'R. PAPA', exit: 'V. CRUZ', fare: 20 },
        { entry: 'R. PAPA', exit: 'QUIRINO', fare: 19 },
        { entry: 'R. PAPA', exit: 'PEDRO GIL', fare: 18 },
        { entry: 'R. PAPA', exit: 'UNITED NATIONS', fare: 17 },
        { entry: 'R. PAPA', exit: 'CENTRAL TERMINAL', fare: 16 },
        { entry: 'R. PAPA', exit: 'CARRIEDO', fare: 15 },
        { entry: 'R. PAPA', exit: 'D. JOSE', fare: 15 },
        { entry: 'R. PAPA', exit: 'BAMBANG', fare: 14 },
        { entry: 'R. PAPA', exit: 'TAYUMAN', fare: 13 },
        { entry: 'R. PAPA', exit: 'BLUMENTRITT', fare: 13 },
        { entry: 'R. PAPA', exit: 'A. SANTOS', fare: 12 },
        { entry: 'R. PAPA', exit: 'R. PAPA', fare: 11 },

        { entry: '5TH AVENUE', exit: 'BACLARAN', fare: 24 },
        { entry: '5TH AVENUE', exit: 'EDSA', fare: 23 },
        { entry: '5TH AVENUE', exit: 'LIBERTAD', fare: 22 },
        { entry: '5TH AVENUE', exit: 'GIL PUYAT', fare: 22 },
        { entry: '5TH AVENUE', exit: 'V. CRUZ', fare: 21 },
        { entry: '5TH AVENUE', exit: 'QUIRINO', fare: 20 },
        { entry: '5TH AVENUE', exit: 'PEDRO GIL', fare: 19 },
        { entry: '5TH AVENUE', exit: 'UNITED NATIONS', fare: 18 },
        { entry: '5TH AVENUE', exit: 'CENTRAL TERMINAL', fare: 17 },
        { entry: '5TH AVENUE', exit: 'CARRIEDO', fare: 16 },
        { entry: '5TH AVENUE', exit: 'D. JOSE', fare: 15 },
        { entry: '5TH AVENUE', exit: 'BAMBANG', fare: 15 },
        { entry: '5TH AVENUE', exit: 'TAYUMAN', fare: 14 },
        { entry: '5TH AVENUE', exit: 'BLUMENTRITT', fare: 13 },
        { entry: '5TH AVENUE', exit: 'A. SANTOS', fare: 13 },
        { entry: '5TH AVENUE', exit: 'R. PAPA', fare: 12 },
        { entry: '5TH AVENUE', exit: '5TH AVENUE', fare: 11 },

        { entry: 'MONUMENTO', exit: 'BACLARAN', fare: 25 },
        { entry: 'MONUMENTO', exit: 'EDSA', fare: 24 },
        { entry: 'MONUMENTO', exit: 'LIBERTAD', fare: 23 },
        { entry: 'MONUMENTO', exit: 'GIL PUYAT', fare: 23 },
        { entry: 'MONUMENTO', exit: 'V. CRUZ', fare: 22 },
        { entry: 'MONUMENTO', exit: 'QUIRINO', fare: 21 },
        { entry: 'MONUMENTO', exit: 'PEDRO GIL', fare: 20 },
        { entry: 'MONUMENTO', exit: 'UNITED NATIONS', fare: 19 },
        { entry: 'MONUMENTO', exit: 'CENTRAL TERMINAL', fare: 18 },
        { entry: 'MONUMENTO', exit: 'CARRIEDO', fare: 17 },
        { entry: 'MONUMENTO', exit: 'D. JOSE', fare: 17 },
        { entry: 'MONUMENTO', exit: 'BAMBANG', fare: 16 },
        { entry: 'MONUMENTO', exit: 'TAYUMAN', fare: 15 },
        { entry: 'MONUMENTO', exit: 'BLUMENTRITT', fare: 15 },
        { entry: 'MONUMENTO', exit: 'A. SANTOS', fare: 13 },
        { entry: 'MONUMENTO', exit: 'R. PAPA', fare: 13 },
        { entry: 'MONUMENTO', exit: '5TH AVENUE', fare: 12 },
        { entry: 'MONUMENTO', exit: 'MONUMENTO', fare: 11 },

        { entry: 'BALINTAWAK', exit: 'BACLARAN', fare: 27 },
        { entry: 'BALINTAWAK', exit: 'EDSA', fare: 27 },
        { entry: 'BALINTAWAK', exit: 'LIBERTAD', fare: 26 },
        { entry: 'BALINTAWAK', exit: 'GIL PUYAT', fare: 25 },
        { entry: 'BALINTAWAK', exit: 'V. CRUZ', fare: 24 },
        { entry: 'BALINTAWAK', exit: 'QUIRINO', fare: 23 },
        { entry: 'BALINTAWAK', exit: 'PEDRO GIL', fare: 22 },
        { entry: 'BALINTAWAK', exit: 'UNITED NATIONS', fare: 22 },
        { entry: 'BALINTAWAK', exit: 'CENTRAL TERMINAL', fare: 20 },
        { entry: 'BALINTAWAK', exit: 'CARRIEDO', fare: 20 },
        { entry: 'BALINTAWAK', exit: 'D. JOSE', fare: 19 },
        { entry: 'BALINTAWAK', exit: 'BAMBANG', fare: 18 },
        { entry: 'BALINTAWAK', exit: 'TAYUMAN', fare: 18 },
        { entry: 'BALINTAWAK', exit: 'BLUMENTRITT', fare: 17 },
        { entry: 'BALINTAWAK', exit: 'A. SANTOS', fare: 16 },
        { entry: 'BALINTAWAK', exit: 'R. PAPA', fare: 15 },
        { entry: 'BALINTAWAK', exit: '5TH AVENUE', fare: 15 },
        { entry: 'BALINTAWAK', exit: 'MONUMENTO', fare: 13 },
        { entry: 'BALINTAWAK', exit: 'BALINTAWAK', fare: 11 },

        { entry: 'ROOSEVELT', exit: 'BACLARAN', fare: 29 },
        { entry: 'ROOSEVELT', exit: 'EDSA', fare: 29 },
        { entry: 'ROOSEVELT', exit: 'LIBERTAD', fare: 28 },
        { entry: 'ROOSEVELT', exit: 'GIL PUYAT', fare: 27 },
        { entry: 'ROOSEVELT', exit: 'V. CRUZ', fare: 26 },
        { entry: 'ROOSEVELT', exit: 'QUIRINO', fare: 25 },
        { entry: 'ROOSEVELT', exit: 'PEDRO GIL', fare: 24 },
        { entry: 'ROOSEVELT', exit: 'UNITED NATIONS', fare: 23 },
        { entry: 'ROOSEVELT', exit: 'CENTRAL TERMINAL', fare: 22 },
        { entry: 'ROOSEVELT', exit: 'CARRIEDO', fare: 22 },
        { entry: 'ROOSEVELT', exit: 'D. JOSE', fare: 21 },
        { entry: 'ROOSEVELT', exit: 'BAMBANG', fare: 20 },
        { entry: 'ROOSEVELT', exit: 'TAYUMAN', fare: 20 },
        { entry: 'ROOSEVELT', exit: 'BLUMENTRITT', fare: 19 },
        { entry: 'ROOSEVELT', exit: 'A. SANTOS', fare: 18 },
        { entry: 'ROOSEVELT', exit: 'R. PAPA', fare: 17 },
        { entry: 'ROOSEVELT', exit: '5TH AVENUE', fare: 16 },
        { entry: 'ROOSEVELT', exit: 'MONUMENTO', fare: 15 },
        { entry: 'ROOSEVELT', exit: 'BALINTAWAK', fare: 13 },
        { entry: 'ROOSEVELT', exit: 'ROOSEVELT', fare: 11 },

        { entry: 'RECTO', exit: 'RECTO', fare: 11 },

        { entry: 'LEGARDA', exit: 'RECTO', fare: 12 },
        { entry: 'LEGARDA', exit: 'LEGARDA', fare: 11 },
        
        { entry: 'PUREZA', exit: 'RECTO', fare: 14 },
        { entry: 'PUREZA', exit: 'LEGARDA', fare: 13 },
        { entry: 'PUREZA', exit: 'PUREZA', fare: 11 },

        { entry: 'V.MAPA', exit: 'RECTO', fare: 15 },
        { entry: 'V.MAPA', exit: 'LEGARDA', fare: 14 },
        { entry: 'V.MAPA', exit: 'PUREZA', fare: 13 },
        { entry: 'V.MAPA', exit: 'V.MAPA', fare: 11 },

        { entry: 'J.RUIZ', exit: 'RECTO', fare: 16 },
        { entry: 'J.RUIZ', exit: 'LEGARDA', fare: 15 },
        { entry: 'J.RUIZ', exit: 'PUREZA', fare: 14 },
        { entry: 'J.RUIZ', exit: 'V.MAPA', fare: 13 },
        { entry: 'J.RUIZ', exit: 'J.RUIZ', fare: 11 },

        { entry: 'GILMORE', exit: 'RECTO', fare: 17 },
        { entry: 'GILMORE', exit: 'LEGARDA', fare: 16 },
        { entry: 'GILMORE', exit: 'PUREZA', fare: 15 },
        { entry: 'GILMORE', exit: 'V.MAPA', fare: 14 },
        { entry: 'GILMORE', exit: 'J.RUIZ', fare: 12 },
        { entry: 'GILMORE', exit: 'GILMORE', fare: 11 },

        { entry: 'BETTY-GO', exit: 'RECTO', fare: 18 },
        { entry: 'BETTY-GO', exit: 'LEGARDA', fare: 17 },
        { entry: 'BETTY-GO', exit: 'PUREZA', fare: 16 },
        { entry: 'BETTY-GO', exit: 'V.MAPA', fare: 15 },
        { entry: 'BETTY-GO', exit: 'J.RUIZ', fare: 13 },
        { entry: 'BETTY-GO', exit: 'GILMORE', fare: 12 },
        { entry: 'BETTY-GO', exit: 'BETTY-GO', fare: 11 },

        { entry: 'CUBAO', exit: 'RECTO', fare: 19 },
        { entry: 'CUBAO', exit: 'LEGARDA', fare: 18 },
        { entry: 'CUBAO', exit: 'PUREZA', fare: 17 },
        { entry: 'CUBAO', exit: 'V.MAPA', fare: 16 },
        { entry: 'CUBAO', exit: 'J.RUIZ', fare: 14 },
        { entry: 'CUBAO', exit: 'GILMORE', fare: 13 },
        { entry: 'CUBAO', exit: 'BETTY-GO', fare: 12 },
        { entry: 'CUBAO', exit: 'CUBAO', fare: 11 },

        { entry: 'ANONAS', exit: 'RECTO', fare: 21 },
        { entry: 'ANONAS', exit: 'LEGARDA', fare: 20 },
        { entry: 'ANONAS', exit: 'PUREZA', fare: 19 },
        { entry: 'ANONAS', exit: 'V.MAPA', fare: 18 },
        { entry: 'ANONAS', exit: 'J.RUIZ', fare: 16 },
        { entry: 'ANONAS', exit: 'GILMORE', fare: 14 },
        { entry: 'ANONAS', exit: 'BETTY-GO', fare: 13 },
        { entry: 'ANONAS', exit: 'CUBAO', fare: 12 },
        { entry: 'ANONAS', exit: 'ANONAS', fare: 11 },

        { entry: 'KATIPUNAN', exit: 'RECTO', fare: 22 },
        { entry: 'KATIPUNAN', exit: 'LEGARDA', fare: 21 },
        { entry: 'KATIPUNAN', exit: 'PUREZA', fare: 20 },
        { entry: 'KATIPUNAN', exit: 'V.MAPA', fare: 19 },
        { entry: 'KATIPUNAN', exit: 'J.RUIZ', fare: 17 },
        { entry: 'KATIPUNAN', exit: 'GILMORE', fare: 16 },
        { entry: 'KATIPUNAN', exit: 'BETTY-GO', fare: 15 },
        { entry: 'KATIPUNAN', exit: 'CUBAO', fare: 14 },
        { entry: 'KATIPUNAN', exit: 'ANONAS', fare: 12 },
        { entry: 'KATIPUNAN', exit: 'KATIPUNAN', fare: 11 },

        { entry: 'SANTOLAN', exit: 'RECTO', fare: 24 },
        { entry: 'SANTOLAN', exit: 'LEGARDA', fare: 23 },
        { entry: 'SANTOLAN', exit: 'PUREZA', fare: 22 },
        { entry: 'SANTOLAN', exit: 'V.MAPA', fare: 21 },
        { entry: 'SANTOLAN', exit: 'J.RUIZ', fare: 19 },
        { entry: 'SANTOLAN', exit: 'GILMORE', fare: 18 },
        { entry: 'SANTOLAN', exit: 'BETTY-GO', fare: 17 },
        { entry: 'SANTOLAN', exit: 'CUBAO', fare: 15 },
        { entry: 'SANTOLAN', exit: 'ANONAS', fare: 14 },
        { entry: 'SANTOLAN', exit: 'KATIPUNAN', fare: 13 },
        { entry: 'SANTOLAN', exit: 'SANTOLAN', fare: 11 },
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
        dispatch({ type: 'UPDATE_CARD', payload: id })
    }

    const contextAddNewCard = (card) => {
        dispatch({ type: 'ADD_CARD', payload: card })
    }


    const contextAddCardTransaction = (transaction) => {
        dispatch({ type: 'UPDATE_CARD_TRANSACTIONS', payload: transaction })
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

