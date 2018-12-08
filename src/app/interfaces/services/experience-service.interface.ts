import {Observable} from "rxjs";
import {Experience} from "../../models/entities/experience";

export interface IExperienceService {

    //#region Methods

    // Load working experience asynchronously.
    loadExperiencesAsync(): Observable<Experience[]>

    //#endregion

}