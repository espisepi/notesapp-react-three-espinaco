import NetworkServices from "./NetworkServices";
import NetworkDataSources from "./NetworkDataSources";
import UseCases from "./UseCases";

const cNetworkServices = NetworkServices();
const cNetworkDataSources = NetworkDataSources(
  cNetworkServices.MainNetworkServiceImpl
);
const cUseCase = UseCases(cNetworkDataSources.MainNetworkDataSourceImpl);

export default {
  GetNotesUseCase: cUseCase.GetNotesUseCase,
  InsertNoteUseCase: cUseCase.InsertNoteUseCase,
  DeleteNoteUseCase: cUseCase.DeleteNoteUseCase,
};
