import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'user',
    initialState: {
        value: '',
    },
    reducers: {
        logginUser: (state, user) => ({
            user,
        }),
    },
});

export const { logginUser } = loginSlice.actions;
export const thisUser = (state) => state.login;

export default loginSlice.reducer;