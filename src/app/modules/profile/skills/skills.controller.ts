import {IController, ITimeoutService} from "angular";
import {ISkillScope} from "../../../interfaces/scopes/skill.scope";
import {ISkillService} from "../../../interfaces/services/skill-service.interface";
import {Skill} from "../../../models/entities/skill";

export class SkillsController implements IController {

    //#region Properties

    //#endregion

    //#region Constructor

    public constructor(public $skill: ISkillService,
                       public $timeout: ITimeoutService,
                       public $scope: ISkillScope) {

        // Property binding.
        $scope.ngIsLoadingSkills = true;

        // Methods binding.
        $scope.ngOnInit = this._ngOnInit;

    }

    //#endregion

    //#region Methods

    // Called when component is initialized.
    private _ngOnInit = (): void => {

        this.$skill
            .loadSkillsAsync()
            .subscribe((skills: Skill[]) => {
                this.$scope.skills = skills;
                this.$scope.ngIsLoadingSkills = false;
            });
    }

    //#endregion
}