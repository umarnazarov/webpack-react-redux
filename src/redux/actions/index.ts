import { AppDispatch } from "../store";
import {userSlice} from "../reducers/userSlice";
import { IUser } from "../../models";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUser = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.gettingUsers())
//         let data = await fetch('https://jsonplaceholder.typicode.com/users');
//         let users:IUser[] = await data.json();
//         dispatch(userSlice.actions.getUsersSuccess(users))
//     } catch(e) {
//         dispatch(userSlice.actions.getUsersError(e.message))
//     }
// }

export const fetchUser = createAsyncThunk(
    '/users/fetchAll',
    async (_, thunkAPI) => {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users');
            let data:IUser[] = await res.json();
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue("ERROR")
        }
    }
)