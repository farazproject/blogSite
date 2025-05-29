import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../src/redux/slices/counterSlice';
import authReducer from '../src/redux/slices/authSlice';

export const store = configureStore({
reducer: {
counter: counterReducer,
 authentication: authReducer,
},
});