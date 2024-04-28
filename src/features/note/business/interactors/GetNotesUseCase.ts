import { createAsyncThunk } from "@reduxjs/toolkit";
import MainNetworkDataSource from "../datasource/network/MainNetworkDataSource";
import { handleUseCaseError } from "../../../../common/business/interactors/HandleUseCaseException";

export default class GetNotesUseCase {
  constructor(private readonly mainNetworkDataSource: MainNetworkDataSource) {}

  getNotes = createAsyncThunk("note/getNotesUseCase", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await this.mainNetworkDataSource.getNotes();
    } catch (error: unknown) {
      return rejectWithValue(handleUseCaseError(error));
    }
  });
}
