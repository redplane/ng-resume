import {Ng1ViewDeclaration, StateProvider} from "@uirouter/angularjs";
import {UrlStatesConstant} from "../../constants/url-states.constant";
import {IPromise, IQService} from "angular";
import {ILazyLoad} from "oclazyload";
import {module} from 'angular';
import {IEducationService} from "../../interfaces/services/education-service.interface";
import {IProfileService} from "../../interfaces/services/profile-service.interface";
import {ProfileResolve} from "../../interfaces/resolves/profile.resolve";
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

        // Experiences view.
        views[`${UrlStatesConstant.projectModuleName}@${UrlStatesConstant.profileMasterLayoutModuleName}`] = {
            controller: 'projectsController',
            templateProvider: ($q: IQService) => {
                return $q((resolve) => {
                    // lazy load the view
                    require.ensure([], () => {
                        require('./projects/projects.scss');
                        resolve(require('./projects/projects.html'));
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

                                // Import angular moment.
                                require('moment');
                                require('angular-moment/angular-moment');

                                // Sub-module.
                                let ngModule = module('app.profile', ['angularMoment']);

                                // Profile master-layout controller.
                                const {MasterLayoutController} = require('./master-layout/master-layout.controller');

                                // About me controller.
                                const {AboutMeController} = require('./about-me/about-me.controller');

                                // Experiences controller.
                                const {ExperiencesController} = require('./experiences/experiences.controller');

                                // Projects controller.
                                const {ProjectsController} = require('./projects/projects.controller');

                                // Import controller file.
                                ngModule.controller('profileMasterLayoutController', MasterLayoutController);
                                ngModule.controller('aboutMeController', AboutMeController);
                                ngModule.controller('experiencesController', ExperiencesController);
                                ngModule.controller('projectsController', ProjectsController);

                                $ocLazyLoad.inject(ngModule.name);
                                resolve();
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