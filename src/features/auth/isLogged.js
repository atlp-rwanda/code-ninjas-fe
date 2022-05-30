import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'isLoggedIn',
    initialState: {
        value: false,
    },
    reducers: {
        loginMode: (state) => ({
            ...state,
            value: true,
        }),
        outMode: (state) => ({
            ...state,
            value: false,
        }),
    },
});

export const { loginMode, outMode } = authSlice.actions;

export const loginOrLogout = (state) => state.isLoggedIn.value;

export default authSlice.reducer;