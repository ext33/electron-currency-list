import { combineReducers } from 'redux'
import listReducer from './listStore'
import currencyReducer from './currencyStore'


export default combineReducers({
    listReducer,
    currencyReducer,
})