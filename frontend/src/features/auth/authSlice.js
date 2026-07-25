import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../services/authApi";

const TOKEN_KEY = "mb_token";

const storedToken =
    typeof localStorage !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;

function persistToken(token) {
    if (typeof localStorage === "undefined") return;
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
}

// --- Async thunks ---------------------------------------------------------

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            return await authApi.register({ name, email, password });
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            return await authApi.login({ email, password });
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// Restore session on app load using a persisted token.
export const fetchCurrentUser = createAsyncThunk(
    "auth/fetchCurrentUser",
    async (_, { getState, rejectWithValue }) => {
        const token = getState().auth.token;
        if (!token) return rejectWithValue("No token");
        try {
            return await authApi.me(token);
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// --- Slice ----------------------------------------------------------------

const initialState = {
    user: null,
    token: storedToken,
    isAuthenticated: Boolean(storedToken),
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
            persistToken(null);
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        const onAuthPending = (state) => {
            state.loading = true;
            state.error = null;
        };
        const onAuthFulfilled = (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            persistToken(action.payload.token);
        };
        const onAuthRejected = (state, action) => {
            state.loading = false;
            state.error = action.payload || "Something went wrong";
        };

        builder
            .addCase(registerUser.pending, onAuthPending)
            .addCase(registerUser.fulfilled, onAuthFulfilled)
            .addCase(registerUser.rejected, onAuthRejected)

            .addCase(loginUser.pending, onAuthPending)
            .addCase(loginUser.fulfilled, onAuthFulfilled)
            .addCase(loginUser.rejected, onAuthRejected)

            .addCase(fetchCurrentUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(fetchCurrentUser.rejected, (state) => {
                // Token is invalid/expired — clear the session.
                state.loading = false;
                state.user = null;
                state.token = null;
                state.isAuthenticated = false;
                persistToken(null);
            });
    },
});

export const { logout, clearError } = authSlice.actions;

export default authSlice.reducer;
