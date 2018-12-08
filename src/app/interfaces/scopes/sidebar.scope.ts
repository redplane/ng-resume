import {IScope} from "angular";
import {UrlStatesConstant} from "../../constants/url-states.constant";
import {KeyValuePair} from "../../models/key-value-pair";

export interface ISidebarScope extends IScope {

    //#region Properties

    // Url state constant reflection.
    urlStateConstant: UrlStatesConstant;

    // List of available languages.
    availableLanguages: Array<KeyValuePair<string>>;

    // Current selected language.
    currentLanguage: KeyValuePair<string>;

    // Input profile name.
    readonly profileName: string;

    // Input profile image.
    readonly profileImage: string;

    // Input profile title.
    readonly profileTitle: string;

    // Input sidebar item.
    readonly items: Array<any>;

    //#endregion

    //#region Methods

    // Called when component is initialized.
    ngOnInit(): void;

    // Get current route location.
    ngGetLocation(): void;

    // Called when sidebar item is clicked.
    ngOnSidebarItemClicked(item: any): void;

    // Whether url is chosen or not.
    ngIsUrlChosen(url: string): boolean;

    // Get current language that system is using.
    ngGetCurrentLanguage(): string;

    // Called when language is changed.
    ngOnLanguageChanged(): void;

    //#endregion
}