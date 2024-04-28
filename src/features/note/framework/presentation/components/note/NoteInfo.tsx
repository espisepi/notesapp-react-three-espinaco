import React from "react";
import { useAppSelector } from "../../../../../../common/framework/presentation/store/hooks";

const NoteInfo = () => {
  const { readingNote } = useAppSelector((state) => state.NoteSlice);
  return (
    <>
      <h2>Note Details</h2>
      {readingNote ? (
        <div>
          <p className="fw-bold">Title: {readingNote.title}</p>
          <p className="fst-italic">Price: {readingNote.price}</p>
          <p className="fw-light">Description: {readingNote.description}</p>
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
