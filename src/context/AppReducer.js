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
                if (card.id == action.payload.id) {
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
        default:
            return state
    }
}