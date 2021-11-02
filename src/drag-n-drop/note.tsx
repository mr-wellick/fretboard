import { FC } from "react";
import { useDrag } from "react-dnd";
import { useAppDispatch } from "../app/hooks";
import { itemTypes } from "../components/itemTypes";
import { PentatonicPositions } from "../features/fretboard/fretboardSlice";
import { addNote, asyncAddNote } from "../features/grid/gridSlice";

const Note: FC<PentatonicPositions> = (props) => {
  const dispatch = useAppDispatch();
  const [, drag] = useDrag(() => ({
    type: itemTypes.note,
    item: { ...props },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<PentatonicPositions>();
      if (item && dropResult) {
        dispatch(asyncAddNote(item));
        // dispatch(addNote(item));
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
      {props.fretNote}
    </div>
  );
};

export default Note;
