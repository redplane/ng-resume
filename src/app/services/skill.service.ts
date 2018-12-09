import {ISkillService} from "../interfaces/services/skill-service.interface";
import {Observable} from "rxjs";
import {Skill} from "../models/entities/skill";
import {IHttpResponse, IHttpService} from "angular";
import {fromPromise} from "rxjs/internal-compatibility";

export class SkillService implements ISkillService {

    //#region Constructor

    public constructor(public $http: IHttpService) {

    }

    //#endregion

    //#region Methods

    // Load skills asynchronously.
    public loadSkillsAsync(): Observable<Skill[]> {
        const loadSkillsPromise = this
            .$http
            .get<Skill[]>('/assets/data/skill.json')
            .then((loadSkillsResult: IHttpResponse<Skill[]>) => {
                return loadSkillsResult.data;
            });

        return fromPromise(loadSkillsPromise);
    }

    //#endregion
}