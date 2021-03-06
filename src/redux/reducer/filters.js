const initialState = {
    categori: null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    }
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY_BY':
            return {
                ...state,
                categori: action.payload
            }
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            }
        default:
            return state;
    }

}

export default filters