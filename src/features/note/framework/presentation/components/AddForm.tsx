import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../common/framework/presentation/store/hooks";
import { InsertNoteEvents } from "../viewmodel/events/InsertNoteEvents";

const AddForm = () => {
  const { isLoggedIn } = useAppSelector((state) => state.AuthSlice);
  const dispatch = useAppDispatch();

  const contentNoteRef = useRef<HTMLInputElement>(null);

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      contentNoteRef.current?.checkValidity()
    ) {
      dispatch(
        InsertNoteEvents().insertNoteEvent({
          content: contentNoteRef.current.value,
        })
      );
      contentNoteRef.current.value = "";
    }
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Note</h2>
        <form onSubmit={formSubmit}>
        <div className="form-group">
          <label htmlFor="content">Content</label>
            <input
              type="text"
              className="form-control"
              ref={contentNoteRef}
              id="content"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
