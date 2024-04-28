import { NoteState } from "../slices/NoteSlice";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Note from "../../../../business/domain/Note";
import di from "../../../../di";

export const InsertNoteEvents = () => {
  const insertNoteEvent = createAsyncThunk(
    "note/insertNoteEvent",
    async (note: Note, thunkAPI) => {
      const { dispatch } = thunkAPI;
      dispatch(di.InsertNoteUseCase.insertNote(note));
    }
  );

  const handlePending = (state: NoteState) => {
    state.isLoading = true;
    state.error = null;
  };

  const handleFulfilled = (state: NoteState, action: PayloadAction<Note>) => {
    state.notes.push(action.payload);
    state.isLoading = false;
  };

  const handleRejected = (state: NoteState, action: PayloadAction<unknown>) => {
    state.isLoading = false;
    state.error = action.payload as string;
  };
  return {
    insertNoteEvent,
    handlePending,
    handleFulfilled,
    handleRejected,
  };
};
