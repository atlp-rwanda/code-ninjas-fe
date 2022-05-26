import { createSlice } from '@reduxjs/toolkit';

export const visibilitySlice = createSlice({
  name: 'visibility',
  initialState: {
    value: true,
  },
  reducers: {
    changeVisibility: (state) => ({
      ...state,
      value: !state.value,
    }),
  },
});

export const { changeVisibility } = visibilitySlice.actions;

export const selectVisibility = (state) => state.visibility.value;

export default visibilitySlice.reducer;
