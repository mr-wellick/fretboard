import React, { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import Note from "../../components/note";
import map from "lodash.map";
import Grid from "../grid/grid";

const Fretboard: FC = () => {
  const { pentatonicScales } = useAppSelector((state) => state.fretboard);
  return (
    <div className="py-7 px-4">
      <Grid />
      {map(pentatonicScales, (position) => {
        return position.map((note) => {
          return <Note key={note.id} {...note} />;
        });
      })}
    </div>
  );
};

export default Fretboard;
