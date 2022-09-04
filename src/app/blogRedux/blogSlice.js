import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

const fetchBlog = createAsyncThunk('blog/fetchBlog', async () => {});
const createBlog = createAsyncThunk('blog/createBlog', async () => {});
const updateBlog = createAsyncThunk('blog/updateBlog', async () => {});
const deleteBlog = createAsyncThunk('blog/deleteBlog', async () => {});

const BlogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {}
});


export default BlogSlice.reducer;