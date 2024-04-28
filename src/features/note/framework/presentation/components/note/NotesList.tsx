import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../common/framework/presentation/store/hooks";
import { GetNotesEvents } from "../../viewmodel/events/GetNotesEvents";
import { DeleteNoteEvents } from "../../viewmodel/events/DeleteNoteEvents";
import { readNoteEvent } from "../../viewmodel/slices/NoteSlice";

const NotesList = () => {
  const { isLoggedIn } = useAppSelector((state) => state.AuthSlice);
  const { isLoading, notes } = useAppSelector((state) => state.NoteSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetNotesEvents().getNotesEvent());
  }, [dispatch]);

  const noteList =
    notes.length > 0
      ? notes.map((note) => (
          <li
            className="list-group-item d-flex  justify-content-between align-items-center"
            key={note.id}
          >
            <div>{note.title}</div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                disabled={!isLoggedIn}
                onClick={() => {
                  dispatch(readNoteEvent(note));
                }}
              >
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                disabled={!isLoggedIn}
                onClick={
                  () => dispatch(DeleteNoteEvents().deleteNoteEvent(note))
                  //get use case response
                  /*.unwrap()
                    .then((data) => {
                      console.log(data);
                    })
                    .catch((rejectedValue) => {
                      console.log(rejectedValue);
                    })*/
                }
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : "no notes found";

  return (
    <div>
      <h2>Notes List</h2>
      {isLoading ? "loading..." : <ul className="list-group">{noteList}</ul>}
    </div>
  );
};

export default NotesList;
