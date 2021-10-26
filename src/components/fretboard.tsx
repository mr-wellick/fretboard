import React from "react";
import uniqueId from "lodash.uniqueid";

type FretboardLayoutProps = {
  scaleLengthInCM: number;
  fretCols: number;
  fretRows: number;
  strings: {
    stringNumber: number;
    stringName: string;
    id: string;
    style: string;
  }[];
};

const Note = () => {
  return <div></div>;
};

const String = ({
  scaleLengthInCM,
  fretCols,
  fretRows,
  strings,
}: FretboardLayoutProps) => {
  console.log(scaleLengthInCM);
  console.log(strings);
  return (
    <>
      <div className="flex content-center">
        {/* Render n strings */}
        <div className="mr-2">
          {strings.map((string) => (
            <p
              key={string.id}
              className={`${string.style} border border-red-600 rounded-full h-6 w-6 flex items-center justify-center`}
            >
              {string.stringName}
            </p>
          ))}
        </div>
        {/* Render an m (rows) x n (columns) matrix */}
        <div className={`grid grid-cols-${fretCols} w-full`}>
          {[...Array(fretRows * fretCols)].map((_, index) => {
            return (
              <div
                key={uniqueId(index.toString())}
                className="border p-4"
              ></div>
            );
          })}
        </div>
      </div>
      {/* Render n (columns) numbering each fret */}
      <div className={`grid grid-cols-${fretCols} justify-items-center mt-5`}>
        {[...Array(fretCols)].map((_, index) => {
          return <div key={uniqueId(index.toString())}>{index + 1}</div>;
        })}
      </div>
    </>
  );
};

const Fretboard = () => {
  const fretboardLayouts = {
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
            stringNumber: 6,
            fretNumber: 5,
            fretNote: "A",
            root: "minor",
          },
          {
            stringNumber: 6,
            fretNumber: 8,
            fretNote: "C",
            root: "major",
          },
        ],
      },
    },
  };
  return (
    <div className="py-7 px-4">
      <String {...fretboardLayouts.guitar} />
    </div>
  );
};

export default Fretboard;
