import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Sheriff Dean' },
    { id: '1', name: 'Toba' },
    { id: '2', name: 'Dave Gray' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = ({ users }) => users;

export default usersSlice.reducer