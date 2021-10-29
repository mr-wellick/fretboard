import { configureStore } from "@reduxjs/toolkit";
import fretboardReducer from "../features/fretboard/fretboardSlice";

export default configureStore({
  reducer: {
    fretboard: fretboardReducer,
  },
});
