import MainNetworkDataSource from "../datasource/network/MainNetworkDataSource";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Note from "../domain/Note";
import { handleUseCaseError } from "../../../../common/business/interactors/HandleUseCaseException";

export default class DeleteNoteUseCase {
  constructor(private readonly mainNetworkDataSource: MainNetworkDataSource) {}

  deleteNote = createAsyncThunk(
    "note/deleteNoteUseCase",
    async (note: Note, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        return await this.mainNetworkDataSource.deleteNote(note);
      } catch (error: unknown) {
        return rejectWithValue(handleUseCaseError(error));
      }
    }
  );
}
