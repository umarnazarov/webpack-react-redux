import { IUser } from "../../models"
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { fetchUser } from "../actions";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState:UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // gettingUsers(state) {
        //     state.isLoading = true;
        // },
        // getUsersSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.error = ''
        //     state.users = action.payload;
        // },
        // getUsersError(state, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload
        // }
    },
    extraReducers: {
        [fetchUser.fulfilled.type]: (state, action:PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = ''
            state.users = action.payload;
        },
        [fetchUser.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUser.rejected.type]: (state, action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = "ERROR"
        }
    }
})

export default userSlice.reducer