export class Project {

    //#region Properties

    public name: string;

    public from: string;

    public to: string;

    public company: string;

    public description: Array<string>;

    public roles: Array<string>;

    public responsibilities: Array<string>;

    public technologies: Array<string>;

    //#endregion

    //#region Constructor

    public constructor() {
        this.name = '';
        this.from = '';
        this.to = '';
        this.company = '';
        this.description = [];
        this.roles = [];
        this.responsibilities = [];
        this.technologies = [];
    }

    //#endregion
}