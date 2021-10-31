import { FC } from "react";
import { useDrag } from "react-dnd";
import { useAppSelector } from "../app/hooks";
import { itemTypes } from "./itemTypes";
import { PentatonicPositions } from "../features/fretboard/fretboardSlice";

const Notes: FC = () => {
  const { pentatonicScales } = useAppSelector((state) => state.fretboard);
  const [, drag] = useDrag(() => ({
    type: itemTypes.note,
    item: { ...pentatonicScales.firstPosition },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<PentatonicPositions>();
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

  return (
    <div
      ref={drag}
      role="Note"
      className="flex items-center justify-center border border-red-600 rounded-full h-12 w-12 cursor-move"
    >
      G
    </div>
  );
};

export default Notes;
