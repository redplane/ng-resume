import {Observable} from "rxjs";
import {Profile} from "../../models/entities/profile";

export interface IProfileService {

    //#region Methods

    // Load profile asynchronously.
    loadProfileAsync(): Observable<Profile>;

    //#endregion
}