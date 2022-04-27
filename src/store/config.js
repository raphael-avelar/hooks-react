import reducer from './reducers/index'

const initialState = {
  number: 0,
  cart: [],
  products: [],
  user: null
}

export {
  reducer,
  initialState
}