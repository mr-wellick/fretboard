import React, { FC, useRef, useEffect } from "react";
import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { itemTypes } from "../../components/itemTypes";
import range from "lodash.range";
import uniqueId from "lodash.uniqueid";
import { initFretboardGrid } from "./gridSlice";

type FretProps = {
  column: number;
  row: number;
};

const Frets: FC<FretProps> = ({ column, row }) => {
  const dispatch = useAppDispatch();
  const fretContainerRef = useRef<HTMLInputElement>(null);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: itemTypes.note,
    drop: () => ({ name: "Grid", column, row }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  useEffect(() => {
    if (fretContainerRef.current) {
      const { x, y, right, left, bottom, top } =
        fretContainerRef.current.getBoundingClientRect();
      dispatch(
        initFretboardGrid({
          fretNumber: column,
          stringNumber: row,
          x,
          y,
          right,
          left,
          bottom,
          top,
        })
      );
    }
  }, []);

  return (
    <div ref={fretContainerRef}>
      <div
        ref={drop}
        role="Grid"
        className="border border-gray-600"
        data-column={column}
        data-row={row}
      >
        {isActive ? "Release to drop" : "Drag a box here"}
      </div>
    </div>
  );
};

const Grid: FC = () => {
  const { fretCols, fretRows } = useAppSelector((state) => state.fretboard);
  return (
    <div className={`grid grid-cols-${fretCols}`}>
      {range(1, fretRows + 1).map((row: number) => {
        return range(1, fretCols + 1).map((column: number) => {
          return (
            <Frets
              key={uniqueId(String(row + column))}
              row={row}
              column={column}
            />
          );
        });
      })}
    </div>
  );
};

export default Grid;
