import { configureStore } from '@reduxjs/toolkit';

import cReducer from '../src/redux/slices/counterSlice';

export const store = configureStore({
reducer: {
counter: cReducer,
},
});