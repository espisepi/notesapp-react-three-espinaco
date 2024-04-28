import React from "react";
import "./note.css";
import NotesList from "./NotesList";
import NoteInfo from "./NoteInfo";

const PostContainer = () => {
  return (
    <>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <NotesList />
        </div>
        <div className="col side-line">
          <NoteInfo />
        </div>
      </div>
    </>
  );
};

export default PostContainer;
