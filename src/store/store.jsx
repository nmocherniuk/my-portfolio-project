import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './navigation-slice';
import projectReducer from './project-slice';

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    project: projectReducer,
  },
});

export default store;
