export default (state, action) =>{
    switch (action.type) {
        case 'FETCH_CARDS':
            return {
                ...state, cards: [...state.cards, ...action.payload]
            }
    
        default:
            return state
    }
}