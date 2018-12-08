import {Project} from "../../models/entities/project";
import {Observable} from "rxjs";

export interface IProjectService {

    //#region Methods

    // Load projects asynchronously.
    loadProjectsAsync(): Observable<Project[]>

    //#endregion
}