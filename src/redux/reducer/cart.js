const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);


const cart = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            const items = Object.values(newItems).map((obj) => obj.items)
            const allPizzas = [].concat.apply([], items);

            const pricepizza = getTotalPrice(allPizzas);
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: pricepizza
            };
        }
        case 'CLEAR_CART': {
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        }
        case 'CLEAR_ONE_PIZZAS': {
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }
        case 'ADD_ONE_PIZZAS': {
            const newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]]
            return {
                ...state,
                items: {
                    [action.payload]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems)
                    }
                }
            }
        }
        case 'REMOVE_ONE_PIZZAS': {
            const oldItems = state.items[action.payload].items.slice(1)
            const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
            return {
                ...state,
                items: {
                    [action.payload]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems)
                    }
                }
            }
        }

        default:
            return state;
    }

}

export default cart