"use client";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./reducers/rootReducers";

export const store = configureStore({
  reducer: {
    ...rootReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
