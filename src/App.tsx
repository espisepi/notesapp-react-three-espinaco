import React from "react";
import Header from "./framework/presentation/components/Header";
import Container from "./framework/presentation/components/Container";
import AddForm from "./framework/presentation/components/AddForm";
import BookContainer from "./framework/presentation/components/book/BookContainer";

import { Provider } from "react-redux";
import { store } from "./framework/presentation/store/store";


const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Container>
          <AddForm />
          <BookContainer />
        </Container>
      </Provider>
    </>
  );
};

export default App;
