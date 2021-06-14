import { combineReducers } from 'redux'
import pizzasReducer from './pizzas'
import filtersReducer from './filters'
import cartsReducer from './cart'


const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer,
    cart: cartsReducer
})

export default rootReducer