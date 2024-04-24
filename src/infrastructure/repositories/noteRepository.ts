// src/infrastructure/repositories/noteRepository.ts

import { Note } from '../../domain/models/Note';
import { NoteRepository } from '../../domain/repositories/NoteRepository';
import { Http } from '../../domain/repositories/Http';
import { NoteDTO } from '../../infrastructure/http/dto/NoteDTO';

export const noteRepository = (client: Http): NoteRepository => ({
    getNotes: async () => {
        const notes = await client.get<NoteDTO>('');
        return notes.map((noteDto: NoteDTO): Note => ({ id: noteDto.id, content: noteDto.content }));
    },

    getNotesById: async id => {
        const notes = await client.get<NoteDTO>('', { id });
        return notes.map((noteDto: NoteDTO): Note => ({ id: noteDto.id, content: noteDto.content }));
    }
});
