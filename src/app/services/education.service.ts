import {IEducationService} from "../interfaces/services/education-service.interface";
import {Observable} from "rxjs";
import {Education} from "../models/entities/education";
import {IHttpResponse, IHttpService} from "angular";
import {fromPromise} from "rxjs/internal-compatibility";

export class EducationService implements IEducationService {


    //#region Constructor

    public constructor(public $http: IHttpService) {

    }

    //#endregion

    //#region Methods

    // Load educations asynchronously.
    public loadEducationsAsync(): Observable<Education[]> {
        const loadProjectsPromise = this
            .$http
            .get<Education[]>('/assets/data/education.json')
            .then((httpResponse: IHttpResponse<Education[]>) => {
                return httpResponse.data;
            });

        return fromPromise(loadProjectsPromise);
    }

    //#endregion
}