import {Contact} from "./contact";
import {Language} from "./language";

export class Profile {

    //#region Properties

    public fullName: string;

    public photo: string;

    public role: string;

    public contacts: Array<Contact>;

    public languages: Array<Language>;

    public interests: Array<string>;

    public description: string;

    //#endregion

    //#region Constructor

    public constructor() {
        this.fullName = '';
        this.photo = '';
        this.role = '';
        this.contacts = [];
        this.languages = [];
        this.interests = [];
        this.description = '';
    }

    //#endregion
}