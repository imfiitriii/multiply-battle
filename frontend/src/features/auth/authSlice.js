import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            username: null,
            name: null,
            email: null,
        },
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null
    },
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticated = true;
        },
        loginError: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        logoutStart: (state) => {
            state.loading = true;
        },
        logoutSuccess: (state) => {
            state.loading = false
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;;
        },
        registerStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess: (state, action) => {
            state.loading = false
        },
        registerError: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const { loginStart, loginSuccess, loginError, registerStart, registerError, registerSuccess, logoutStart, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
