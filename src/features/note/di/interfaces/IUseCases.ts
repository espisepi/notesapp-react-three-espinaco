import DeleteNoteUseCase from "../../business/interactors/DeleteNoteUseCase";
import GetNotesUseCase from "../../business/interactors/GetNotesUseCase";
import InsertNoteUseCase from "../../business/interactors/InsertNoteUseCase";

export default interface IUseCases {
  GetNotesUseCase: GetNotesUseCase;
  InsertNoteUseCase: InsertNoteUseCase;
  DeleteNoteUseCase: DeleteNoteUseCase;
}
