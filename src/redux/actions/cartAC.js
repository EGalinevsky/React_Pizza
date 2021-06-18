export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const clearOnePizzas = (item) => ({
    type: 'CLEAR_ONE_PIZZAS',
    payload: item
})

export const addOnePizzas = (id) => ({
    type: 'ADD_ONE_PIZZAS',
    payload: id
})

export const removeOnePizzas = (id) => ({
    type: 'REMOVE_ONE_PIZZAS',
    payload: id
})