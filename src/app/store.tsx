import { configureStore } from "@reduxjs/toolkit";
import fretboardReducer from "../features/fretboard/fretboardSlice";
import gridSlice from "../features/grid/gridSlice";

export const store = configureStore({
  reducer: {
    fretboard: fretboardReducer,
    grid: gridSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
