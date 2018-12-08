import {IExperienceService} from "../interfaces/services/experience-service.interface";
import {IHttpResponse, IHttpService} from "angular";
import {Observable} from "rxjs";
import {Experience} from "../models/entities/experience";
import {fromPromise} from "rxjs/internal-compatibility";

export class ExperienceServiceInterface implements IExperienceService {

    //#region Properties

    //#endregion

    //#region Constructor

    public constructor(public $http: IHttpService) {

    }

    //#endregion

    //#region Methods

    // Load experience asynchronously.
    public loadExperiencesAsync(): Observable<Experience[]> {
        const loadExperiencePromise = this.$http
            .get('/assets/data/experience.json')
            .then((loadExperienceResult: IHttpResponse<Experience[]>) => {
                return loadExperienceResult.data;
            });

        return fromPromise(loadExperiencePromise);
    }

    //#endregion
}