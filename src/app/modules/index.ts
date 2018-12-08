import {IModule} from "angular";
import {StateProvider} from "@uirouter/angularjs";
import {ProfileModule} from "./profile";
import {SharedModule} from "./shared";

export class AppModule {

    //#region Constructor

    public constructor(public ngModule: IModule) {
        ngModule
            .config(($stateProvider: StateProvider) => {
                new ProfileModule($stateProvider);
                new SharedModule($stateProvider);
            })
    }

    //#endregion
}