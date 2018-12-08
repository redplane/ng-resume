import {Profile} from "../../models/entities/profile";
import {Education} from "../../models/entities/education";

export class ProfileResolve {

    //#region Properties

    // User profile.
    public profile: Profile;

    // Educations.
    public educations: Education[];

    //#endregion

}