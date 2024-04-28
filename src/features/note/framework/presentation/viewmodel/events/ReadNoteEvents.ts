import { NoteState } from "../slices/NoteSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import Note from "../../../../business/domain/Note";

export const ReadNoteEvents = () => {
  const handReadNote = (state: NoteState, action: PayloadAction<Note>) => {
    state.readingNote = action.payload;
  };
  return {
    handReadNote,
  };
};
