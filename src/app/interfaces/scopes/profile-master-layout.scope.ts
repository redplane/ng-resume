import {IScope} from "angular";
import {Profile} from "../../models/entities/profile";
import {UrlStatesConstant} from "../../constants/url-states.constant";

export interface IProfileMasterLayoutScope extends IScope {

    //#region Properties

    urlStatesConstant: UrlStatesConstant;

    profile: Profile;

    //#endregion

}