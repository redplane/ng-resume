import {IScope} from "angular";
import {Project} from "../../models/entities/project";

export interface IProfileProjectScope extends IScope {

    //#region Properties

    // Whether projects are being loaded or not.
    ngIsLoadingProjects: boolean;

    // List of projects that user has done.
    projects: Project[];

    //#endregion

    //#region Methods

    // Called when component is initialized.
    ngOnInit(): void;

    //#endregion
}