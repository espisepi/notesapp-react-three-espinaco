// src/infrastructure/views/react-ui/src/App.tsx

import React, { useState } from 'react';
import { NoteList } from './views/NoteList';

const App = () => {

    return (
        <div>
            <h1>List notes</h1>
            <h2>Listando las notas</h2>
            <NoteList />
        </div>
    );
};

export default App;
