import {Education} from "../../models/entities/education";
import {Observable} from "rxjs";

export interface IEducationService {

    //#region Methods

    // Load educations asynchronously.
    loadEducationsAsync(): Observable<Education[]>

    //#endregion

}