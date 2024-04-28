import MainNetworkDataSource from "../datasource/network/MainNetworkDataSource";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleUseCaseError } from "../../../../common/business/interactors/HandleUseCaseException";
import Note from "../domain/Note";
import { RootState } from "../../../../common/framework/presentation/store/store";
import { insertLog } from "../../../report/framework/presentation/viewmodel/slices/ReportSlice";

export default class InsertNoteUseCase {
  constructor(private readonly mainNetworkDataSource: MainNetworkDataSource) {}

  insertNote = createAsyncThunk(
    "note/insertNoteUseCase",
    async (noteData: Note, thunkAPI) => {
      const { rejectWithValue, getState, dispatch } = thunkAPI;
      const state = getState() as RootState;
      noteData.userName = state.AuthSlice.name;
      try {
        const returnedValue = await this.mainNetworkDataSource.insertNote(
          noteData
        );
        dispatch(insertLog("Insert note successes"));
        return returnedValue;
      } catch (error: unknown) {
        return rejectWithValue(handleUseCaseError(error));
      }
    }
  );
}
