import { createSlice } from "@reduxjs/toolkit";
import uniqueId from "lodash.uniqueid";

export const fretboardSlice = createSlice({
  name: "fretboard",
  initialState: {
    guitar: {
      scaleLengthInCM: 64.77,
      fretCols: 12,
      fretRows: 5,
      strings: [
        {
          stringNumber: 1,
          stringName: "E",
          id: uniqueId("E"),
          style: "transform -translate-y-3",
        },
        {
          stringNumber: 2,
          stringName: "B",
          id: uniqueId("B"),
          style: "transform -translate-y-0.5",
        },
        {
          stringNumber: 3,
          stringName: "G",
          id: uniqueId("G"),
          style: "transform translate-y-2",
        },
        {
          stringNumber: 4,
          stringName: "D",
          id: uniqueId("D"),
          style: "transform translate-y-4",
        },
        {
          stringNumber: 5,
          stringName: "A",
          id: uniqueId("A"),
          style: "transform translate-y-7",
        },
        {
          stringNumber: 6,
          stringName: "E",
          id: uniqueId("E"),
          style: "transform translate-y-9",
        },
      ],
      pentatonicScales: {
        firstPosition: [
          {
            semitones: 5,
            stringNumber: 6,
            fretNumber: 5,
            fretNote: "A",
            root: "minor",
          },
          {
            semitones: 8,
            stringNumber: 6,
            fretNumber: 8,
            fretNote: "C",
            root: "major",
          },
          {
            semitones: 8,
            stringNumber: 5,
            fretNumber: 5,
            fretNote: "D",
            root: null,
          },
          {
            semitones: 7,
            stringNumber: 5,
            fretNumber: 8,
            fretNote: "E",
            root: null,
          },
        ],
      },
    },
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = fretboardSlice.actions;

export default fretboardSlice.reducer;
