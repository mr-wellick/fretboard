import { createSlice } from "@reduxjs/toolkit";
import { PentatonicPositions } from "../fretboard/fretboardSlice";
import find from "lodash.find";

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
  id?: string;
  fretNote?: string;
};

type FretState = {
  activeNotes: FretboardGrid[];
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
    addNote: (state, action) => {
      state.activeNotes.push(action.payload);
    },
  },
});

export const asyncAddNote = (position: PentatonicPositions) => {
  return async (dispatch, getState) => {
    const { fretboardGrid } = getState().grid;
    const fretTarget: FretboardGrid = find(fretboardGrid, {
      stringNumber:
        position.stringNumber -
        1 /* string number is six but the the note will actually be placed in the 5th row */,
      fretNumber: position.fretNumber,
    });

    dispatch(
      addNote({
        ...position,
        ...fretTarget,
      })
    );
  };
};

// Action creators are generated for each case reducer function
export const { initFretboardGrid, addNote } = gridSlice.actions;

export default gridSlice.reducer;
