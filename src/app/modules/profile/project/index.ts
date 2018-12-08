import {StateProvider} from "@uirouter/angularjs";
import {UrlStatesConstant} from "../../../constants/url-states.constant";
import {IQService, module} from "angular";
import {ILazyLoad} from "oclazyload";

export class ProfileProjectModule {

    //#region Constructor

    public constructor(public $stateProvider: StateProvider) {
        $stateProvider
            .state(UrlStatesConstant.profileProjectModuleName, {
                url: UrlStatesConstant.profileProjectModuleUrl,
                controller: "profileProjectController",
                templateProvider: ($q: IQService) => {
                    // We have to inject $q service manually due to some reasons that ng-annotate cannot add $q service in production mode.
                    return $q((resolve) => {
                        // lazy load the view
                        require.ensure([], () => {
                            resolve(require('./profile-project.html'))
                        });
                    });
                },
                parent: UrlStatesConstant.profileMasterLayoutModuleName,
                resolve: {
                    /*
                    * Load login controller.
                    * */
                    loadProfileProjectController: ($q: IQService, $ocLazyLoad: ILazyLoad) => {
                        return $q((resolve) => {
                            require.ensure([], (require) => {
                                // load only controller module
                                let ngModule = module('app.profile.project', []);
                                const {ProfileProjectController} = require('./profile-project.controller');
                                // Import controller file.
                                ngModule.controller('profileProjectController', ProfileProjectController);
                                $ocLazyLoad.inject(ngModule.name);
                                resolve(ngModule.controller);
                            })
                        });
                    }
                }
            });
    }

    //#endregion
}