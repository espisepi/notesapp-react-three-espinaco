import Note from "../../domain/Note";

export default interface MainNetworkDataSource {
  getNotes(): Promise<Note[]>;
  insertNote(note: Note): Promise<Note>;
  deleteNote(note: Note): Promise<Note>;
}
