// src/domain/services/NoteService.ts

import { NoteRepository } from '../repositories/NoteRepository';

// Here we can change the repository by one that implement the INoteRepository interface
//const repository: INoteRepository = noteRepository;

export const noteService = (repository: NoteRepository): NoteRepository => ({
    getNotes: () => {
        return repository.getNotes();
    },
    getNotesById: id => {
        return repository.getNotesById(id);
    }
});
