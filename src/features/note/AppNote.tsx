import React from "react";
import Header from "./framework/presentation/components/Header";
import Container from "./framework/presentation/components/Container";
import AddForm from "./framework/presentation/components/AddForm";
import NoteContainer from "./framework/presentation/components/note/NoteContainer";


const AppNote = () => {
  return (
    <>
            <Header />
            <Container>
                <AddForm />
                <NoteContainer />
            </Container>
    </>
  );
};

export default AppNote;
