import { Note } from '../models/Note';
export interface NoteRepository {
    getNotes: () => Promise<Note[]>;
    getNotesById: (id: string) => Promise<Note[]>;
}
