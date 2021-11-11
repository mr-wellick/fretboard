import { createSlice } from "@reduxjs/toolkit";
import uniqueId from "lodash.uniqueid";

type Pentaonic = {
  root: "minor" | "major" | null;
  fretCol: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  fretRow: 0 | 1 | 2 | 3 | 4;
  notePos: "top" | "bottom";
  fretNote: string;
  id: string;
};

type FretboardGridState = {
  instrument: string;
  fretCols: number;
  fretRows: number;
  scaleLengthInCM: number;
  strings: {
    fretRow: number;
    fretCol: number;
    notePos: "top" | "bottom";
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
  petantonicScales: {
    allPositions: Pentaonic[];
    firstPosition: Pentaonic[];
  };
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
  petantonicScales: {
    allPositions: [],
    firstPosition: [
      {
        fretCol: 4,
        fretRow: 4,
        notePos: "bottom",
        fretNote: "A",
        id: uniqueId("A"),
        root: "minor",
      },
      {
        fretCol: 7,
        fretRow: 4,
        notePos: "bottom",
        fretNote: "C",
        id: uniqueId("C"),
        root: "major",
      },
      {
        fretCol: 4,
        fretRow: 3,
        notePos: "bottom",
        fretNote: "D",
        id: uniqueId("D"),
        root: null,
      },
      {
        fretCol: 6,
        fretRow: 3,
        notePos: "bottom",
        fretNote: "E",
        id: uniqueId("E"),
        root: null,
      },
      {
        fretCol: 4,
        fretRow: 2,
        notePos: "bottom",
        fretNote: "G",
        id: uniqueId("G"),
        root: null,
      },
      {
        fretCol: 6,
        fretRow: 2,
        notePos: "bottom",
        fretNote: "A",
        id: uniqueId("A"),
        root: null,
      },
      {
        fretCol: 4,
        fretRow: 1,
        notePos: "bottom",
        fretNote: "C",
        id: uniqueId("C"),
        root: null,
      },
      {
        fretCol: 6,
        fretRow: 1,
        notePos: "bottom",
        fretNote: "D",
        id: uniqueId("D"),
        root: null,
      },
      {
        fretCol: 4,
        fretRow: 0,
        notePos: "bottom",
        fretNote: "E",
        id: uniqueId("E"),
        root: null,
      },
      {
        fretCol: 7,
        fretRow: 0,
        notePos: "bottom",
        fretNote: "G",
        id: uniqueId("G"),
        root: null,
      },
      {
        fretCol: 4,
        fretRow: 0,
        notePos: "top",
        fretNote: "A",
        id: uniqueId("A"),
        root: null,
      },
      {
        fretCol: 7,
        fretRow: 0,
        notePos: "top",
        fretNote: "C",
        id: uniqueId("C"),
        root: null,
      },
    ],
  },
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
