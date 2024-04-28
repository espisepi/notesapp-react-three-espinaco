import { configureStore } from "@reduxjs/toolkit";

// book feature
import BookSlice from "../../../../features/book/framework/presentation/viewmodel/slices/BookSlice";
import AuthSlice from "../../../../features/auth/framework/presentation/viewmodel/slices/AuthSlice";
import ReportSlice from "../../../../features/report/framework/presentation/viewmodel/slices/ReportSlice";

// note feature
import NoteSlice from "../../../../features/note/framework/presentation/viewmodel/slices/NoteSlice";

export const store = configureStore({
  reducer: { BookSlice, AuthSlice, ReportSlice, NoteSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
