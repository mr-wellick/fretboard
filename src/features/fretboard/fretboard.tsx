import React, { FC } from "react";
import Grid from "../../components/grid";
import Note from "../../components/note";

const Fretboard: FC = () => {
  return (
    <div className="py-7 px-4">
      <Grid />
      <Note />
    </div>
  );
};

export default Fretboard;
