import {Experience} from "../../models/entities/experience";

export interface IExperienceScope {

    //#region Properties

    // Loaded experiences.
    experiences: Array<Experience>;

    // Whether experience is being loaded or not..
    ngIsExperienceLoading: boolean;

    //#endregion

    //#region Methods

    // Called when component is initialized.
    ngOnInit(): void;

    //#endregion

}