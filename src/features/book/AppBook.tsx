import React from "react";
import Header from "./framework/presentation/components/Header";
import Container from "./framework/presentation/components/Container";
import AddForm from "./framework/presentation/components/AddForm";
import BookContainer from "./framework/presentation/components/book/BookContainer";


const AppBook = () => {
  return (
    <>
            <Header />
            <Container>
                <AddForm />
                <BookContainer />
            </Container>
    </>
  );
};

export default AppBook;
