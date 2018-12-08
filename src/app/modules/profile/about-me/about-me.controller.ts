import {IController} from "angular";
import {IAboutMeScope} from "../../../interfaces/scopes/about-me.scope";
import {ProfileResolve} from "../../../interfaces/resolves/profile.resolve";

export class AboutMeController implements IController {

    //#region Constructor

    public constructor(public $scope: IAboutMeScope,
                       public profileResolve: ProfileResolve) {

        // Property binding.
        $scope.profile = profileResolve.profile;
        $scope.educations = profileResolve.educations;
    }

    //#endregion
}