import { createSlice } from "@reduxjs/toolkit";
import { PentatonicPositions } from "../fretboard/fretboardSlice";

type FretboardGrid = {
  stringNumber: number;
  fretNumber: number;
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
};

type FretState = {
  activeNotes: PentatonicPositions[];
  fretboardGrid: FretboardGrid[];
};

const initialState: FretState = {
  activeNotes: [],
  fretboardGrid: [],
};

export const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    initFretboardGrid: (state, action) => {
      state.fretboardGrid.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { initFretboardGrid } = gridSlice.actions;

export default gridSlice.reducer;
