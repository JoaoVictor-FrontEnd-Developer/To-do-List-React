

function listReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload)
        case 'DONE_ITEM':
            return state.map(item => {
                if (item.id === action.payload) {
                    item.done = !item.done
                }
                return item
            })
        case 'UPDATE_ITEM':
            return state.map(item => {
                if (item.id === action.payload) {
                    item.text = action.text
                }
                return item
            })
        case 'CHANGE_ANIMATION':
            return state.map(item => {
                if (item.id === action.payload) {
                    item.animation = !item.animation
                }
                return item
            })
        default:
            return state;
       
    }
}

export default listReducer;