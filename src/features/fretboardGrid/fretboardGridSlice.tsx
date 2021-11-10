import { createSlice } from "@reduxjs/toolkit";
import uniqueId from "lodash.uniqueid";

type FretboardGridState = {
  instrument: string;
  fretCols: number;
  fretRows: number;
  scaleLengthInCM: number;
  strings: {
    fretRow: number;
    fretCol: number;
    notePos: string;
    name: string;
    id: string;
  }[];
  grid: {
    fretRow: number;
    fretCol: number;
    x: number;
    y: number;
    right: number;
    left: number;
    bottom: number;
    top: number;
    width: number;
    height: number;
  }[];
};

const initialState: FretboardGridState = {
  instrument: "guitar",
  fretCols: 12,
  fretRows: 5,
  scaleLengthInCM: 64.77,
  strings: [
    {
      fretRow: 0,
      fretCol: 0,
      notePos: "top",
      name: "E",
      id: uniqueId("E"),
    },
    {
      fretRow: 0,
      fretCol: 0,
      notePos: "bottom",
      name: "B",
      id: uniqueId("B"),
    },
    {
      fretRow: 1,
      fretCol: 0,
      notePos: "bottom",
      name: "G",
      id: uniqueId("G"),
    },
    {
      fretRow: 2,
      fretCol: 0,
      notePos: "bottom",
      name: "D",
      id: uniqueId("D"),
    },
    {
      fretRow: 3,
      fretCol: 0,
      notePos: "bottom",
      name: "A",
      id: uniqueId("A"),
    },
    {
      fretRow: 4,
      fretCol: 0,
      notePos: "bottom",
      name: "E",
      id: uniqueId("E"),
    },
  ],
  grid: [],
};

export const fretboardSlice = createSlice({
  name: "fretboardGrid",
  initialState,
  reducers: {
    initFretboardGrid: (state, action) => {
      state.grid.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { initFretboardGrid } = fretboardSlice.actions;

export default fretboardSlice.reducer;
