import React, { FC, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import range from "lodash.range";
import { initFretboardGrid } from "./fretboardGridSlice";
import find from "lodash.find";

type FretProps = {
  fretRow: number;
  fretCol: number;
};

const Frets: FC<FretProps> = ({ fretRow, fretCol }) => {
  const fretContainer = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fretContainer.current) {
      const { x, y, right, left, bottom, top, width, height } =
        fretContainer.current.getBoundingClientRect();

      dispatch(
        initFretboardGrid({
          fretRow,
          fretCol,
          x,
          y,
          right,
          left,
          bottom,
          top,
          width,
          height,
        })
      );
    }
  }, []);

  return <p ref={fretContainer} className="border border-black p-5"></p>;
};

const OpenStringNames: FC = () => {
  const { strings, grid } = useAppSelector((state) => state.fretboardGrid);

  return (
    <section className="grid grid-cols-1 mr-3 w-8 relative">
      {strings.map((string) => {
        const match = find(grid, {
          fretRow: string.fretRow,
          fretCol: string.fretCol,
        });

        if (!match) return null;
        const POSITION =
          string.notePos === "top"
            ? -match.y / 2.5
            : match.y - match.height / 2.5;

        return (
          <p
            className="border rounded-full p-1 h-8 w-8 text-center text-white bg-pink-600 absolute"
            key={string.id}
            style={{ top: `${POSITION}px` }}
          >
            {string.name}
          </p>
        );
      })}
    </section>
  );
};

const FretboardGrid: FC = () => {
  const { fretRows, fretCols } = useAppSelector((state) => state.fretboardGrid);
  return (
    <div className="flex m-10">
      <OpenStringNames />
      <section className={`grid grid-cols-${fretCols} relative w-full`}>
        {range(fretRows).map((row) => {
          return range(fretCols).map((col) => {
            return <Frets key={row + col} fretRow={row} fretCol={col} />;
          });
        })}
      </section>
    </div>
  );
};

export default FretboardGrid;
