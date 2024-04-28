import React from "react";
import { useAppSelector } from "../../../../../../common/framework/presentation/store/hooks";

const NoteInfo = () => {
  const { readingNote } = useAppSelector((state) => state.NoteSlice);
  return (
    <>
      <h2>Note Details</h2>
      {readingNote ? (
        <div>
          <p className="fw-bold">Content: {readingNote.content}</p>
          <p className="fst-italic">id: {readingNote.id}</p>
          <p className="fw-light">username: {readingNote.userName}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no note selected yet. Please select!
        </div>
      )}
    </>
  );
};

export default NoteInfo;
