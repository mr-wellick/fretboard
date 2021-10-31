import { createSlice } from "@reduxjs/toolkit";
import uniqueId from "lodash.uniqueid";

type Strings = {
  stringNumber: number;
  stringName: string;
  id: string;
};

export type PentatonicPositions = {
  stringNumber: 1 | 2 | 3 | 4 | 5 | 6;
  fretNumber: number;
  semitones: number;
  fretNote: string;
  root: "major" | "minor" | null;
  id: string;
};

type FretboardState = {
  scaleLengthInCM: number;
  fretCols: number;
  fretRows: number;
  strings: Strings[];
  pentatonicScales: {
    firstPosition: PentatonicPositions[];
    secondPosition: PentatonicPositions[];
    thirdPosition: PentatonicPositions[];
    fourthPosition: PentatonicPositions[];
    fifthPosition: PentatonicPositions[];
  };
};

const initialState: FretboardState = {
  scaleLengthInCM: 64.77,
  fretCols: 12,
  fretRows: 5,
  strings: [
    {
      stringNumber: 1,
      stringName: "E",
      id: uniqueId("E"),
    },
    {
      stringNumber: 2,
      stringName: "B",
      id: uniqueId("B"),
    },
    {
      stringNumber: 3,
      stringName: "G",
      id: uniqueId("G"),
    },
    {
      stringNumber: 4,
      stringName: "D",
      id: uniqueId("D"),
    },
    {
      stringNumber: 5,
      stringName: "A",
      id: uniqueId("A"),
    },
    {
      stringNumber: 6,
      stringName: "E",
      id: uniqueId("E"),
    },
  ],
  pentatonicScales: {
    firstPosition: [
      {
        semitones: 5,
        stringNumber: 6,
        fretNumber: 5,
        fretNote: "A",
        id: uniqueId("A"),
        root: "minor",
      },
      {
        semitones: 8,
        stringNumber: 6,
        fretNumber: 8,
        fretNote: "C",
        id: uniqueId("C"),
        root: "major",
      },
      {
        semitones: 8,
        stringNumber: 5,
        fretNumber: 5,
        fretNote: "D",
        id: uniqueId("D"),
        root: null,
      },
      {
        semitones: 7,
        stringNumber: 5,
        fretNumber: 8,
        fretNote: "E",
        id: uniqueId("E"),
        root: null,
      },
    ],
    secondPosition: [],
    thirdPosition: [],
    fourthPosition: [],
    fifthPosition: [],
  },
};

export const fretboardSlice = createSlice({
  name: "fretboard",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = fretboardSlice.actions;

export default fretboardSlice.reducer;
