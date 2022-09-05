import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from 'axios';
import { sub } from 'date-fns';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  posts: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  count: 0
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios(POSTS_URL);
  return response.data;
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async initialPost => {
  const response = await axios.post(POSTS_URL, initialPost)
  return response.data
});

export const updatePost = createAsyncThunk('post/updatePost', async initialPost => {
  const { id } = initialPost;
  try {
    const response = await axios.put(`${POSTS_URL}/${id}`, initialPost)
    return response.data
  } catch (err) {
    //return err.message;
    return initialPost; // only for testing Redux!
  }
});

export const deletePost = createAsyncThunk('post/deletePost', async initialPost => {
  const { id } = initialPost;
  try {
    const response = await axios.delete(`${POSTS_URL}/${id}`)
    if (response?.status === 200) return initialPost;
    return `${response?.status}: ${response?.statusText}`;
  } catch (err) {
    return err.message;
  }
});


const postSliceAsync = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reactionAdded: {
      reducer: (state, action) => {
        const { postId, reaction } = action.payload;
        const existingPost = state.posts.find(post => post.id === postId);

        if (existingPost) {
          existingPost.reactions[reaction]++
        }
      }
    },
    increaseCount(state, action) {
      state.count = state.count + 1
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'

        // Adding date and reactions
        let min = 1;
        const loadedPosts = action.payload.map(post => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
          }
          return post;
        });

        // Add any fetched posts to the array
        state.posts = [state.posts, ...loadedPosts]
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // Fix for API post IDs:
        // Creating sortedPosts & assigning the id 
        // would not be needed if the fake API 
        // returned accurate new post IDs
        const sortedPosts = state.posts.sort((a, b) => {
          if (a.id > b.id) return 1
          if (a.id < b.id) return -1
          return 0
        })
        action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
        // End fix for fake API post IDs 

        action.payload.userId = Number(action.payload.userId)
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0
        }
        console.log(action.payload)
        state.posts.push(action.payload)
      })
      .addCase(updatePost.fulfilled, (state, { payload }) => {
        if (!payload?.id) {
          console.log('Update could not complete')
          console.log(payload)
          return;
        }
        const { id } = payload;
        payload.date = new Date().toISOString();
        const posts = state.posts.filter(post => post.id !== id);
        state.posts = [...posts, payload];
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Delete could not complete')
          console.log(action.payload)
          return;
        }
        const { id } = action.payload;
        const posts = state.posts.filter(post => post.id !== id);
        state.posts = posts;
      })
  }
})


export const { increaseCount, reactionAdded } = postSliceAsync.actions;

export const selectAllPosts = ({ postAsync }) => postAsync.posts
export const selectStatus = ({ postAsync }) => postAsync.status
export const selectError = ({ postAsync }) => postAsync.error
export const getCount = (state) => state.postAsync.count;

export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (postsAsync, userId) => postsAsync.filter(post => post.userId === userId)
)


export const selectPostById = (state, postId) =>
  state.postAsync.posts.find(post => post.id === postId);

export default postSliceAsync.reducer;