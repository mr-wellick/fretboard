import { configureStore } from "@reduxjs/toolkit";
import fretboardGridReducer from "../features/fretboardGrid/fretboardGridSlice";

export const store = configureStore({
  reducer: {
    fretboardGrid: fretboardGridReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
