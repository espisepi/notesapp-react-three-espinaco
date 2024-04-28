import MainNetworkDataSource from "../business/datasource/network/MainNetworkDataSource";
import GetNotesUseCase from "../business/interactors/GetNotesUseCase";
import IUseCases from "./interfaces/IUseCases";
import InsertNoteUseCase from "../business/interactors/InsertNoteUseCase";
import DeleteNoteUseCase from "../business/interactors/DeleteNoteUseCase";

export default (mainNetworkDataSource: MainNetworkDataSource): IUseCases => {
  return {
    GetNotesUseCase: new GetNotesUseCase(mainNetworkDataSource),
    InsertNoteUseCase: new InsertNoteUseCase(mainNetworkDataSource),
    DeleteNoteUseCase: new DeleteNoteUseCase(mainNetworkDataSource),
  };
};
