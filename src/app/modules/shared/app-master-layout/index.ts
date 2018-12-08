import {StateProvider} from "@uirouter/angularjs";
import {UrlStatesConstant} from "../../../constants/url-states.constant";
import {IQService} from "angular";
import {ILazyLoad} from "oclazyload";
import {module} from 'angular';

export class AppMasterLayoutModule {

    //#region Constructor

    public constructor(public $stateProvider: StateProvider) {
        $stateProvider
            .state(UrlStatesConstant.appMasterLayoutModuleName, {
                abstract: true,
                templateProvider: ($q: IQService) => {
                    // We have to inject $q service manually due to some reasons that ng-annotate cannot add $q service in production mode.
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // Import view style.
                            require('./app-master-layout.scss');

                            // lazy load the view
                            resolve(require('./app-master-layout.html'))
                        });
                    });
                },
                controller: 'appMasterLayoutController',
                resolve: {
                    /*
                    * Load login controller.
                    * */
                    loadAppMasterLayoutController: ($q: IQService, $ocLazyLoad: ILazyLoad) => {
                        return $q((resolve) => {
                            require.ensure([], (require) => {
                                // load only controller module
                                let ngModule = module('app.master-layout', []);
                                const {AppMasterLayoutController} = require('./app-master-layout.controller');
                                // Import controller file.
                                ngModule.controller('appMasterLayoutController', AppMasterLayoutController);
                                $ocLazyLoad.inject(ngModule.name);
                                resolve(ngModule.controller);
                            })
                        });
                    }
                }
            })
    }

    //#endregion

}