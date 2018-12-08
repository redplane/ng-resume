import {StateProvider} from "@uirouter/angularjs";
import {AppMasterLayoutModule} from "./app-master-layout";

export class SharedModule {

    //#region Constructor

    public constructor(public $stateProvider: StateProvider) {
        new AppMasterLayoutModule($stateProvider);
    }

    //#endregion

}