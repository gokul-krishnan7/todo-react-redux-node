import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Selector function to get the darkMode value
export const selectDarkMode = (state) => state.theme.darkMode;

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
