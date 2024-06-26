import MainNetworkDataSource from "../datasource/network/MainNetworkDataSource";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleUseCaseError } from "../../../../common/business/interactors/HandleUseCaseException";
import Book from "../domain/Book";
import { RootState } from "../../../../common/framework/presentation/store/store";
import { insertLog } from "../../../report/framework/presentation/viewmodel/slices/ReportSlice";

export default class InsertBookUseCase {
  constructor(private readonly mainNetworkDataSource: MainNetworkDataSource) {}

  insertBook = createAsyncThunk(
    "book/insertBookUseCase",
    async (bookData: Book, thunkAPI) => {
      const { rejectWithValue, getState, dispatch } = thunkAPI;
      const state = getState() as RootState;
      bookData.userName = state.AuthSlice.name;
      try {
        const returnedValue = await this.mainNetworkDataSource.insertBook(
          bookData
        );
        dispatch(insertLog("Insert book successes"));
        return returnedValue;
      } catch (error: unknown) {
        return rejectWithValue(handleUseCaseError(error));
      }
    }
  );
}
