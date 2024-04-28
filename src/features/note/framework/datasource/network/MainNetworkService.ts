import Note from "../../../business/domain/Note";

export default interface MainNetworkService {
  getNotes(): Promise<Note[]>;
  insertNote(note: Note): Promise<Note>;
  deleteNote(note: Note): Promise<Note>;
}
