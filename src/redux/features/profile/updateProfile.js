import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'newProfile',
  initialState: {
    value: '',
  },
  reducers: {
    updateProfileData: (state, newProfile) => ({
      newProfile,
    }),
  },
});

export const { updateProfileData } = profileSlice.actions;
export const thisUser = (state) => state.updateProfile;

export default profileSlice.reducer;
