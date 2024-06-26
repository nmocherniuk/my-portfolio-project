import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = navigationSlice.actions;

export default navigationSlice.reducer;
