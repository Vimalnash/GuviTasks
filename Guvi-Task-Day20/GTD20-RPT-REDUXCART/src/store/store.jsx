import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Reducers/CartSlice';
import productReducer from '../Reducers/ProductSlice';

const rootReducers = combineReducers({
    cart : cartReducer,
    product : productReducer
});

const store = configureStore({
    reducer : rootReducers
})

export default store;