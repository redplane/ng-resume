import {IController, IScope} from "angular";
import {UrlStatesConstant} from "../../../constants/url-states.constant";
import {IProfileMasterLayoutScope} from "../../../interfaces/scopes/profile-master-layout.scope";
import {ProfileResolve} from "../../../interfaces/resolves/profile.resolve";

export class MasterLayoutController implements IController{

    //#region Properties


    //#endregion

    //#region Constructor

    public constructor(public $scope: IProfileMasterLayoutScope,
                       public profileResolve: ProfileResolve) {
        $scope.urlStatesConstant = UrlStatesConstant;
        $scope.profile = profileResolve.profile;
    }

    //#endregion

    //#region Methods

    //#endregion
}