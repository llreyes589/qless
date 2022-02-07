export default (state, action) => {
    switch (action.type) {
        case 'FETCH_CARDS':
            return {
                ...state, cards: [...state.cards, ...action.payload]
            }
        case 'ADD_CARD':
            return {
                ...state, cards: [action.payload, ...state.cards]
            }
        case 'UPDATE_CARD':
            const newCards = state.cards.map(card => {
                if (card.id === action.payload.id) {
                    return {
                        ...card,
                        ...action.payload
                    }
                }
                return card
            })
            return {
                ...state, cards: [...newCards]
            }
        case 'UPDATE_CARD_TRANSACTIONS':
            const newCardss = state.cards.map(card => {
                if (card.id === action.payload.id) {
                    return {
                        ...card,
                        ...action.payload
                    }
                }
                return card
            })
            console.log('newCardss', newCardss)
            return {
                ...state, cards: [...newCardss]
            }

            
        default:
            return state
    }
}