import axios from 'axios'

export const setLoaded = payload =>({
  type: 'SET_LODED',
  payload,
})

export const fetchPizzass = (sortBy, categori) => (dispatch) => {
  console.log(sortBy)
  dispatch(setLoaded(false))
    axios.get(`/pizzas?${categori !== null ? `category=${categori}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
      console.log(data)
      dispatch(setPizzas(data))
    });
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

