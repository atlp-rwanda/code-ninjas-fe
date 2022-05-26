import { createSlice } from '@reduxjs/toolkit';

export const backgroundColorSlice = createSlice({
  name: 'backgroundColor',
  initialState: {
    value: '',
  },
  reducers: {
    setDarkMode: (state) => ({
      ...state,
      value: '#152629',
    }),
    setLightMode: (state) => ({
      ...state,
      value: '#64b2bc',
    }),
  },
});

export const { setDarkMode, setLightMode } = backgroundColorSlice.actions;

export const selectBackgroundColor = (state) => state.backgroundColor.value;

export default backgroundColorSlice.reducer;
