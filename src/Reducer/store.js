import {combineReducers, createStore} from "redux"
import userDataReducer from "../Reducer/reducer"

const rootReducer = combineReducers({
    userData: userDataReducer,
})

export const store = createStore(rootReducer)