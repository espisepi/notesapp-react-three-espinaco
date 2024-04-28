import { createSlice } from "@reduxjs/toolkit";
import di from "../../../../di";
import Note from "../../../../business/domain/Note";
import { GetNotesEvents } from "../events/GetNotesEvents";
import { InsertNoteEvents } from "../events/InsertNoteEvents";
import { DeleteNoteEvents } from "../events/DeleteNoteEvents";
import { ReadNoteEvents } from "../events/ReadNoteEvents";

export interface NoteState {
  notes: Note[];
  readingNote: Note | null;
  isLoading: boolean;
  error: string | null;
}

const initState: NoteState = {
  notes: [],
  readingNote: null,
  isLoading: false,
  error: null,
};

const noteSlice = createSlice({
  name: "note",
  initialState: initState,
  reducers: {
    readNoteEvent: ReadNoteEvents().handReadNote,
  },
  extraReducers: (builder) => {
    //get notes
    builder.addCase(
      di.GetNotesUseCase.getNotes.pending,
      GetNotesEvents().handlePending
    );
    builder.addCase(
      di.GetNotesUseCase.getNotes.fulfilled,
      GetNotesEvents().handleFulfilled
    );
    builder.addCase(
      di.GetNotesUseCase.getNotes.rejected,
      GetNotesEvents().handleRejected
    );

    //insert note
    builder.addCase(
      di.InsertNoteUseCase.insertNote.pending,
      InsertNoteEvents().handlePending
    );
    builder.addCase(
      di.InsertNoteUseCase.insertNote.fulfilled,
      InsertNoteEvents().handleFulfilled
    );
    builder.addCase(
      di.InsertNoteUseCase.insertNote.rejected,
      InsertNoteEvents().handleRejected
    );

    //delete note
    builder.addCase(
      di.DeleteNoteUseCase.deleteNote.pending,
      DeleteNoteEvents().handlePending
    );
    builder.addCase(
      di.DeleteNoteUseCase.deleteNote.fulfilled,
      DeleteNoteEvents().handleFulfilled
    );
    builder.addCase(
      di.DeleteNoteUseCase.deleteNote.rejected,
      DeleteNoteEvents().handleRejected
    );
  },
});

export const { readNoteEvent } = noteSlice.actions;
export default noteSlice.reducer;
