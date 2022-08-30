import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/Post/postSlice";
import postAsyncReducer from "../features/PostAsync/postAsyncSlice";
import userReducer from "../features/users/usersSlice";
import userAsyncReducer from "../features/users/userAsyncSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    users: userReducer,
    postAsync: postAsyncReducer,
    userAsync: userAsyncReducer,
  }
});