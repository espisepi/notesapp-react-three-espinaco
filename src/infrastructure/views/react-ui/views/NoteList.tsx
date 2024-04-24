// src/infrastructure/views/react-ui/src/views/NoteList.tsx

import React, { useCallback, useEffect, useState } from 'react';
import { Note } from '../../../../domain/models/Note';
import { noteService } from '../../../../domain/services/NoteService';
import { noteRepositoryFake } from '../../../instances/productRepositoryFake';


interface NoteListProps {
}

export const NoteList: React.FC<NoteListProps> = ({}) => {
    const [notes, setNotes] = useState<Note[]>([]);

    const getNotes = useCallback(async () => {
        try {
            const responseNotes = await noteService(noteRepositoryFake).getNotes();
            setNotes(responseNotes);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <div>
            <h2>List of notes</h2>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        <button
                            onClick={() => {
                                console.log("CLICKADO BUTTON! :)")
                            }}
                        >
                            {note.content}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
