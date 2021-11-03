import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import Note from "../../drag-n-drop/note";
// import map from "lodash.map";
import Grid from "../grid/grid";
import { asyncAddNote } from "../grid/gridSlice";

const Fretboard: FC = () => {
  const { pentatonicScales } = useAppSelector((state) => state.fretboard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    pentatonicScales.firstPosition.forEach((note) => {
      dispatch(asyncAddNote(note));
    });
  }, []);

  return (
    <div className="py-7 px-4">
      <Grid />
      {/* {map(pentatonicScales, (position) => {
        return position.map((note) => {
          return <Note key={note.id} {...note} />;
        });
      })} */}
    </div>
  );
};

export default Fretboard;
