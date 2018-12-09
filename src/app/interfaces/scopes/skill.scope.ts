import {Skill} from "../../models/entities/skill";

export interface ISkillScope {

    //#region Properties

    // Whether skill is being loaded or not.
    ngIsLoadingSkills: boolean;

    // Loaded skills.
    skills: Skill[];

    //#endregion

    //#region Methods

    // Called when component is initialized.
    ngOnInit(): void;

    //#endregion
}