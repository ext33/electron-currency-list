import { combineReducers } from 'redux'
import listReducer from './listStore'
import currencyReducer from './currencyStore'
import themeReducer from './themeStore'


// combine reducers for set hin in store
export default combineReducers({
    listReducer,
    currencyReducer,
    themeReducer,
})