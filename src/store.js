import {createStore , combineReducers , applyMiddleware} from "redux"
import {composeWithDevTools}  from "redux-devtools-extension"
import thunk from "redux-thunk"
import { GetDataReducer } from "./Reducer.js/Reducer"


const rootReducer = combineReducers({
    myData :GetDataReducer
   
})
const store = createStore(rootReducer , {} , composeWithDevTools(applyMiddleware(thunk)))

export default store