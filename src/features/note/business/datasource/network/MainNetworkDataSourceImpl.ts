import MainNetworkDataSource from "./MainNetworkDataSource";
import Note from "../../domain/Note";
import MainNetworkService from "../../../framework/datasource/network/MainNetworkService";

export default class MainNetworkDataSourceImpl
  implements MainNetworkDataSource
{
  constructor(private readonly mainNetworkService: MainNetworkService) {}

  async getNotes(): Promise<Note[]> {
    return this.mainNetworkService.getNotes().then((note) => note);
  }

  insertNote(note: Note): Promise<Note> {
    return this.mainNetworkService.insertNote(note);
  }

  deleteNote(note: Note): Promise<Note> {
    return this.mainNetworkService.deleteNote(note);
  }
}
