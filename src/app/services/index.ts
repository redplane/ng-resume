import {IModule} from "angular";
import {ProjectService} from "./project.service";
import {EducationService} from "./education.service";
import {ProfileService} from "./profile.service";
import {ExperienceService} from "./experience.service";
import {SkillService} from "./skill.service";

export class ServiceModule {

    //#region Constructor

    public constructor(ngModule: IModule) {
        ngModule.service('$project', ProjectService);
        ngModule.service('$education', EducationService);
        ngModule.service('$profile', ProfileService);
        ngModule.service('$experience', ExperienceService);
        ngModule.service('$skill', SkillService)
    }

    //#endregion
}