import {IController} from "angular";
import {IExperienceScope} from "../../../interfaces/scopes/experience.scope";
import {IExperienceService} from "../../../interfaces/services/experience-service.interface";
import {Experience} from "../../../models/entities/experience";

export class ExperiencesController implements IController {

    //#region Constructor

    public constructor(public $experience: IExperienceService,
                       public $scope: IExperienceScope) {

        // Property binding.
        $scope.experiences = [];
        $scope.ngIsExperienceLoading = true;

        // Methods binding.
        $scope.ngOnInit = this._ngOnInit;
    }

    //#endregion

    //#region Methods

    // Called when component is initialized.
    private _ngOnInit = (): void => {
        this.$experience
            .loadExperiencesAsync()
            .subscribe((experiences: Experience[]) => {
                this.$scope.experiences = experiences;
                this.$scope.ngIsExperienceLoading = false;
            })
    }

    //#endregion
}