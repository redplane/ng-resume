import {IProfileService} from "../interfaces/services/profile-service.interface";
import {Profile} from "../models/entities/profile";
import {Observable} from "rxjs";
import {IHttpResponse, IHttpService} from "angular";
import {fromPromise} from "rxjs/internal-compatibility";

export class ProfileService implements IProfileService {

    //#region Constructor

    public constructor(public $http: IHttpService) {

    }

    //#endregion

    //#region Methods

    public loadProfileAsync(): Observable<Profile> {
        const loadProjectsPromise = this
            .$http
            .get<Profile>('/assets/data/about-me.json')
            .then((httpResponse: IHttpResponse<Profile>) => {
                return httpResponse.data;
            });

        return fromPromise(loadProjectsPromise);
    }

    //#endregion
}