import { combineReducers } from 'redux'
import listReducer from './listStore'
import currencyReducer from './currencyStore'
import themeReducer from './themeStore'


export default combineReducers({
    listReducer,
    currencyReducer,
    themeReducer,
})