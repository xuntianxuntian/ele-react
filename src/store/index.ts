import { createStore } from 'redux'
import rootReducer from '../reducers/index.reducer'
import { StoreState } from '../types/index'
import Action from '../actions/index.action'

// const initialState = {}
const store = createStore(rootReducer)

export default store
