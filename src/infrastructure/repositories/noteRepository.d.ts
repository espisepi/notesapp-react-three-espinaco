import { NoteRepository } from '../../domain/repositories/NoteRepository';
import { Http } from '../../domain/repositories/Http';
export declare const noteRepository: (client: Http) => NoteRepository;
