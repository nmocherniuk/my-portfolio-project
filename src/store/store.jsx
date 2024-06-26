import { configureStore } from '@reduxjs/toolkit';
import navigationSlice from './navigation-slice';

const store = configureStore({
  reducer: {
      navigation: navigationSlice,
  }
});


export default store;