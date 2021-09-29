import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const mainReducer = combineReducers({
    counter: counterReducer
    }
)

export type AppStateType = ReturnType<typeof mainReducer>

export const store = createStore(mainReducer)

export type AppStoreType = typeof store