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

  return (
    <p
      ref={fretContainer}
      className="border border-white p-5"
      style={{
        backgroundColor: "rgb(33,11,11)",
      }}
    ></p>
  );
};

const OpenStringNames: FC = () => {
  const { strings, grid } = useAppSelector((state) => state.fretboardGrid);

  return (
    <section className="grid grid-cols-1 pr-3 mr-1 w-8 relative bg-white">
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
            className="border rounded-full p-1 h-8 w-8 text-center text-white bg-black absolute"
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

const Notes: FC = () => {
  const { petantonicScales, grid } = useAppSelector(
    (state) => state.fretboardGrid
  );

  return (
    <section className="absolute">
      {petantonicScales.firstPosition.map((note) => {
        const match = find(grid, {
          fretCol: note.fretCol,
          fretRow: note.fretRow,
        });

        if (!match) return null;

        const TOP =
          note.notePos === "bottom"
            ? `${match.top - match.height * 0.3}px`
            : `${match.top - match.height * 1.3}px`;
        const BOTTOM = `${match.left - match.width * 0.2}px`;

        return (
          <p
            className="border rounded-full p-1 h-8 w-8 text-center bg-white absolute shadow-lg"
            key={note.id}
            style={{
              top: TOP,
              left: BOTTOM,
            }}
          >
            {note.fretNote}
          </p>
        );
      })}
    </section>
  );
};

const FretboardGrid: FC = () => {
  const { fretRows, fretCols } = useAppSelector((state) => state.fretboardGrid);
  return (
    <div
      className="flex p-10"
      style={{ backgroundColor: "rgb(255, 227, 161)" }}
    >
      <OpenStringNames />
      <section className={`grid grid-cols-${fretCols} relative w-full`}>
        <Notes />
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
