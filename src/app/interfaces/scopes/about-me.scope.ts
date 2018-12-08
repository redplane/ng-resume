import {UrlStatesConstant} from "../../constants/url-states.constant";
import {IScope} from "angular";
import {Profile} from "../../models/entities/profile";
import {Education} from "../../models/entities/education";

export interface IAboutMeScope extends IScope {

    //#region Properties

    // Constant reflection.
    urlStatesConstant: UrlStatesConstant;

    // Profile.
    profile: Profile;

    // Educations.
    educations: Education[];

    //#endregion

}