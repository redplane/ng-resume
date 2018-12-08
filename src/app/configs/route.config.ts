import {IHttpProvider, IModule} from "angular";
import {UrlStatesConstant} from "../constants/url-states.constant";
import {UrlRulesApi} from "@uirouter/core";

export class RouteConfig {

    //#region Constructor

    public constructor(ngModule: IModule) {
        ngModule
            .config(($urlRouterProvider: UrlRulesApi,
                     $httpProvider: IHttpProvider) => {
                // API interceptor
                $httpProvider.interceptors.push('apiInterceptor');

                // Url router config.
                $urlRouterProvider.otherwise(($injector) => {
                    const $state = $injector.get('$state');
                    $state.go(UrlStatesConstant.profileMasterLayoutModuleName);
                });
            });
    }

    //#endregion
}