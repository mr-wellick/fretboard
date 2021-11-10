import React, { FC, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import range from "lodash.range";
import { initFretboardGrid } from "./fretboardGridSlice";

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

const FretboardGrid: FC = () => {
  const { fretRows, fretCols, strings } = useAppSelector(
    (state) => state.fretboardGrid
  );
  return (
    <div className="flex m-4">
      {/* Render each open note name */}
      <div className="grid grid-cols-1">
        {strings.map((string) => {
          return <p key={string.id}>{string.name}</p>;
        })}
      </div>
      {/* Render each individual fret */}
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
