import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../src/redux/slices/counterSlice';
import authReducer from '../src/redux/slices/authSlice';
import postReducer from '../src/redux/slices/postsSlice';

export const store = configureStore({
reducer: {
counter: counterReducer,
 authentication: authReducer,

 posts: postReducer
},
});