import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Reducer } from "./Reducer";

const rootReducer = combineReducers({user:Reducer});
const store = configureStore({reducer: rootReducer, middleware: [thunk, logger]})

export default store;