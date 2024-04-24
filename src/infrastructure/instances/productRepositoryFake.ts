// src/infrastructure/repositories/note.repository.ts

import { NoteRepository } from '../../domain/repositories/NoteRepository';
import { Http } from '../../domain/repositories/Http';
import { httpFake } from './httpFake';
import { noteRepository } from '../repositories/noteRepository';

const client: Http = httpFake;

export const noteRepositoryFake: NoteRepository = noteRepository(client);
