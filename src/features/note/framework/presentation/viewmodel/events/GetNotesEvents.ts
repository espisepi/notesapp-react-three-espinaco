import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Note from "../../../../business/domain/Note";
import { NoteState } from "../slices/NoteSlice";
import di from "../../../../di";

export const GetNotesEvents = () => {
  const getNotesEvent = createAsyncThunk(
    "note/getNotesEvent",
    async (_, thunkAPI) => {
      const { dispatch } = thunkAPI;
      dispatch(di.GetNotesUseCase.getNotes());
    }
  );

  const handlePending = (state: NoteState) => {
    state.isLoading = true;
    state.error = null;
  };

  const handleFulfilled = (state: NoteState, action: PayloadAction<Note[]>) => {
    state.isLoading = false;
    state.notes = action.payload;
  };

  const handleRejected = (state: NoteState, action: PayloadAction<unknown>) => {
    state.isLoading = false;
    state.error = action.payload as string;
  };
  return {
    getNotesEvent,
    handlePending,
    handleFulfilled,
    handleRejected,
  };
};
