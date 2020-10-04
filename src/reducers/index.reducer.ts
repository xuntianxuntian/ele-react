import { combineReducers } from 'redux'
import { StoreState } from '../types/index'

import { enthusiasm } from './welcome.reducer'

const rootReducer = combineReducers<StoreState>({
    welcome: enthusiasm
})

export default rootReducer