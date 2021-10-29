import React from "react";
import { useSelector } from "react-redux";

// type Strings = {
//   stringNumber: number;
//   stringName: string;
//   id: string;
//   style: string;
// };

// type StringProps = {
//   strings: Strings[];
// };

// type FretboardLayoutProps = {
//   scaleLengthInCM: number;
//   fretCols: number;
//   fretRows: number;
//   strings: Strings[];
// };

// type PentatonicPositions = {
//   stringNumber: 1 | 2 | 3 | 4 | 5 | 6;
//   fretNumber: number;
//   semitones: number;
//   fretNote: string;
//   root: "major" | "minor" | null;
// };

// const Notes = ({ strings }: StringProps) => {
//   return (
//     <>
//       {strings.map((string) => (
//         <p
//           key={string.id}
//           className={`${string.style} border border-red-600 rounded-full h-6 w-6 flex items-center justify-center`}
//         >
//           {string.stringName}
//         </p>
//       ))}
//     </>
//   );
// };

// const String = ({
//   scaleLengthInCM,
//   fretCols,
//   fretRows,
//   strings,
// }: FretboardLayoutProps) => {
//   console.log(scaleLengthInCM);

//   return (
//     <>
//       <div className="flex content-center">
//         {/* Render n strings representing strings */}
//         <div className="mr-2">
//           <Notes strings={strings} />
//         </div>
//         {/* Render an m (rows) x n (columns) matrix */}
//         <div className={`grid grid-cols-${fretCols} w-full`}>
//           {[...Array(fretRows * fretCols)].map((_, index) => {
//             return (
//               <div
//                 key={uniqueId(index.toString())}
//                 className="border p-4"
//               ></div>
//             );
//           })}
//         </div>
//       </div>
//       {/* Render n (columns) numbering each fret */}
//       <div className={`grid grid-cols-${fretCols} justify-items-center mt-5`}>
//         {[...Array(fretCols)].map((_, index) => {
//           return <div key={uniqueId(index.toString())}>{index + 1}</div>;
//         })}
//       </div>
//     </>
//   );
// };

const Fretboard = () => {
  const { fretCols, fretRows, strings, pentatonicScales } = useSelector(
    (state) => state.fretboard
  );
  console.log(fretCols, fretRows, strings, pentatonicScales);

  return <div className="py-7 px-4">fretboard</div>;
};

export default Fretboard;
