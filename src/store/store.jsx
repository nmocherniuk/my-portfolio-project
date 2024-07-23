import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './navigation-slice';

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

export default store;
