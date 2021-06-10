import { createStore, combineReducers } from 'redux'
import pizzasReducer from './reducer/pizzas'
import filtersReducer from './reducer/filters'


const  rootReducer = combineReducers({
    pizzasReducer,
    filtersReducer
})

const store = createStore(rootReducer)

export default store