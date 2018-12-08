import {Ng1ViewDeclaration, StateProvider} from "@uirouter/angularjs";
import {UrlStatesConstant} from "../../constants/url-states.constant";
import {IPromise, IQService} from "angular";
import {ILazyLoad} from "oclazyload";
import {module} from 'angular';
import {IEducationService} from "../../interfaces/services/education-service.interface";
import {IProfileService} from "../../interfaces/services/profile-service.interface";
import {ProfileResolve} from "../../interfaces/resolves/profile.resolve";
import {forkJoin, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Profile} from "../../models/entities/profile";
import {Education} from "../../models/entities/education";

export class ProfileModule {

    //#region Constructor

    public constructor(public $stateProvider: StateProvider) {

        const views: { [name: string]: Ng1ViewDeclaration } = {};

        // Master layout.
        views[''] = {
            controller: 'profileMasterLayoutController',
            templateProvider: ($q: IQService) => {
                return $q((resolve) => {
                    // lazy load the view
                    require.ensure([], () => {
                        require('./master-layout/master-layout.scss');
                        resolve(require('./master-layout/master-layout.html'));
                    });
                });
            }
        };

        // About me view.
        views[`${UrlStatesConstant.aboutMeModuleName}@${UrlStatesConstant.profileMasterLayoutModuleName}`] = {
            controller: 'aboutMeController',
            templateProvider: ($q: IQService) => {
                return $q((resolve) => {
                    // lazy load the view
                    require.ensure([], () => {
                        require('./about-me/about-me.scss');
                        resolve(require('./about-me/about-me.html'));
                    });
                });
            }
        };

        // Experiences view.
        views[`${UrlStatesConstant.experienceModuleName}@${UrlStatesConstant.profileMasterLayoutModuleName}`] = {
            controller: 'experiencesController',
            templateProvider: ($q: IQService) => {
                return $q((resolve) => {
                    // lazy load the view
                    require.ensure([], () => {
                        require('./experiences/experiences.scss');
                        resolve(require('./experiences/experiences.html'));
                    });
                });
            }
        };

        $stateProvider
            .state(UrlStatesConstant.profileMasterLayoutModuleName, {
                url: UrlStatesConstant.profileMasterLayoutModuleUrl,
                views: views,
                parent: UrlStatesConstant.appMasterLayoutModuleName,
                resolve: {
                    /*
                    * Load login controller.
                    * */
                    loadControllers: ($q: IQService, $ocLazyLoad: ILazyLoad) => {
                        return $q((resolve) => {
                            require.ensure([], (require) => {

                                // Sub-module.
                                let ngModule = module('app.profile', []);

                                // Profile master-layout controller.
                                const {MasterLayoutController} = require('./master-layout/master-layout.controller');

                                // About me controller.
                                const {AboutMeController} = require('./about-me/about-me.controller');

                                // Experiences controller.
                                const {ExperiencesController} = require('./experiences/experiences.controller');

                                // Import controller file.
                                ngModule.controller('profileMasterLayoutController', MasterLayoutController);
                                ngModule.controller('aboutMeController', AboutMeController);
                                ngModule.controller('experiencesController', ExperiencesController);

                                $ocLazyLoad.inject(ngModule.name);
                                resolve(ngModule.controller);
                            })
                        });
                    },

                    // Resolve profile.
                    profileResolve: ($education: IEducationService,
                                     $profile: IProfileService,
                                     $q: IQService): IPromise<ProfileResolve> | null => {

                        const loadProfilePromise = $profile
                            .loadProfileAsync()
                            .toPromise();

                        const loadEducationsPromise = $education
                            .loadEducationsAsync()
                            .toPromise();

                        // Initialize resolve.
                        const profileResolve = new ProfileResolve();

                        return $q
                            .all([loadProfilePromise, loadEducationsPromise])
                            .then((loadResults: Array<any>) => {
                                profileResolve.profile = <Profile>loadResults[0];
                                profileResolve.educations = <Education[]>loadResults[1];
                                return profileResolve;
                            })
                    }
                }
            });
    }

    //#endregion
}