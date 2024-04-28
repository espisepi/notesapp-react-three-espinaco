import MainNetworkService from "./MainNetworkService";
import Note from "../../../business/domain/Note";

export default class MainNetworkServiceImpl implements MainNetworkService {
  async getNotes(): Promise<Note[]> {
    const res = await fetch("http://localhost:3005/notes");
    return await res.json();
  }

  async insertNote(note: Note): Promise<Note> {
    const res = await fetch("http://localhost:3005/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await res.json();
  }

  async deleteNote(note: Note): Promise<Note> {
    await fetch(`http://localhost:3005/notes/${note.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return note;
  }
}
