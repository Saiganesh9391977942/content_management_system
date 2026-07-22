import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    admin: { username: string; email: string } | null;
}

const initialState: AuthState = {
    token: localStorage.getItem('adminToken') || null,
    isAuthenticated: !!localStorage.getItem('adminToken'),
    admin: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{ token: string; username: string; email: string }>) => {
            localStorage.setItem('adminToken', action.payload.token);
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.admin = { username: action.payload.username, email: action.payload.email };
        },
        logout: (state) => {
            localStorage.removeItem('adminToken');
            state.token = null;
            state.isAuthenticated = false;
            state.admin = null;
        }
    }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
