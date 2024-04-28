import { NoteState } from "../slices/NoteSlice";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Note from "../../../../business/domain/Note";
import di from "../../../../di";

export const DeleteNoteEvents = () => {
  const deleteNoteEvent = createAsyncThunk(
    "note/deleteNoteEvent",
    async (note: Note, thunkAPI) => {
      const { dispatch } = thunkAPI;
      dispatch(di.DeleteNoteUseCase.deleteNote(note));
    }
  );

  const handlePending = (state: NoteState) => {
    state.isLoading = true;
    state.error = null;
  };

  const handleFulfilled = (state: NoteState, action: PayloadAction<Note>) => {
    state.isLoading = false;
    state.notes = state.notes.filter((note) => note.id !== action.payload.id);
  };

  const handleRejected = (state: NoteState, action: PayloadAction<unknown>) => {
    state.isLoading = false;
    state.error = action.payload as string;
  };
  return {
    deleteNoteEvent,
    handlePending,
    handleFulfilled,
    handleRejected,
  };
};
