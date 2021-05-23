import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import darkModeReducer from './darkMode/darkModeSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    darkMode: darkModeReducer,
})

export default configureStore({
    reducer: rootReducer,
})