import {Observable} from "rxjs";
import {Skill} from "../../models/entities/skill";

export interface ISkillService {

    //#region Methods

    // Load skills asynchronously.
    loadSkillsAsync(): Observable<Skill[]>;

    //#endregion
}