import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    value: '',
  },
  reducers: {
    getProfileData: (state, profile) => ({
      profile,
    }),
  },
});

export const { getProfileData } = profileSlice.actions;
export const thisUser = (state) => state.getProfile;

export default profileSlice.reducer;
