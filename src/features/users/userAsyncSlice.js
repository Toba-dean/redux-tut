import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(USERS_URL);
  return response.data
})

const usersSliceAsync = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export const selectAllUsersAsync = ({ userAsync }) => userAsync;

export const selectAsyncUserById = (state, userId) =>
    state.userAsync.find(user => user.id === userId)

export default usersSliceAsync.reducer