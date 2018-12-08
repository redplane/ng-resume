import {IProjectService} from "../interfaces/services/project-service.interface";
import {Observable} from "rxjs";
import {Project} from "../models/entities/project";
import {IHttpResponse, IHttpService} from "angular";
import {fromPromise} from "rxjs/internal-compatibility";

export class ProjectService implements IProjectService {

    //#region Constructor

    public constructor(public $http: IHttpService) {

    }

    //#endregion

    //#region Methods

    // Load projects asynchronously.
    public loadProjectsAsync(): Observable<Project[]> {
        const loadProjectsPromise = this
            .$http
            .get<Project[]>('/assets/data/projects.json')
            .then((httpResponse: IHttpResponse<Project[]>) => {
                return httpResponse.data;
            });

        return fromPromise(loadProjectsPromise);
    }

    //#endregion

}