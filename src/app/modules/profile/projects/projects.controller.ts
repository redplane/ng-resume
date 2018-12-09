import {IController} from "angular";
import {IProfileProjectScope} from "../../../interfaces/scopes/profile-project.scope";
import {IProjectService} from "../../../interfaces/services/project-service.interface";
import {Project} from "../../../models/entities/project";

export class ProjectsController implements IController {

    //#region Constructor

    public constructor(public $project: IProjectService,
                       public $scope: IProfileProjectScope) {

        // Property binding.
        $scope.ngIsLoadingProjects = true;

        // Method binding.
        $scope.ngOnInit = this._ngOnInit;
    }

    //#endregion

    //#region Methods

    // Called when component is initialized.
    private _ngOnInit = (): void => {

        this.$project
            .loadProjectsAsync()
            .subscribe((projects: Project[]) => {
                this.$scope.projects = projects;
                this.$scope.ngIsLoadingProjects = false;
            });
    };

    //#endregion
}