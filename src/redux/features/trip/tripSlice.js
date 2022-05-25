import { createSlice } from '@reduxjs/toolkit';

export const tripRequestSlice = createSlice({
  name: 'trips',
  initialState: {
    value: '',
  },
  reducers: {
    getTripRequests: (state, trips) => ({
      trips,
    }),
  },
});

export const { getTripRequests } = tripRequestSlice.actions;
export const thisUser = (state) => state.getTrips;

export default tripRequestSlice.reducer;
