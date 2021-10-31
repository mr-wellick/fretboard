import React, { FC } from "react";
import { useDrop } from "react-dnd";
import { useAppSelector } from "../app/hooks";
import { itemTypes } from "./itemTypes";
import range from "lodash.range";
import uniqueId from "lodash.uniqueid";

type FretProps = {
  column: number;
  row: number;
};

const Frets: FC<FretProps> = ({ column, row }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: itemTypes.note,
    drop: () => ({ name: "Grid", column, row }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  return (
    <div ref={drop} role="Grid" className="border border-gray-600 ">
      {isActive ? "Release to drop" : "Drag a box here"}
    </div>
  );
};

const Grid: FC = () => {
  const { fretCols, fretRows } = useAppSelector((state) => state.fretboard);
  return (
    <div className={`grid grid-cols-${fretCols}`}>
      {range(1, fretCols + 1).map((column: number) => {
        return range(1, fretRows + 1).map((row: number) => {
          return (
            <Frets
              key={uniqueId(String(column + row))}
              column={column}
              row={row}
            />
          );
        });
      })}
    </div>
  );
};

export default Grid;
