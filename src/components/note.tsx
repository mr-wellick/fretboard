import { FC } from "react";
import { useDrag } from "react-dnd";
import { itemTypes } from "./itemTypes";
import { PentatonicPositions } from "../features/fretboard/fretboardSlice";
import chalk from "chalk";

const Note: FC<PentatonicPositions> = (props) => {
  const [, drag] = useDrag(() => ({
    type: itemTypes.note,
    item: { ...props },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(dropResult);
        console.log(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  console.log(chalk.green("<Note />  props"), props);

  return (
    <div
      ref={drag}
      role="Note"
      className="flex items-center justify-center border border-red-600 rounded-full h-12 w-12 cursor-move"
    >
      {props.fretNote}
    </div>
  );
};

export default Note;
