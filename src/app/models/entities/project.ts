export class Project {

    //#region Properties

    public name: string;

    public from: string;

    public to: string;

    public company: string;

    public description: Array<string>;

    public role: string;

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
        this.role = '';
        this.responsibilities = [];
        this.technologies = [];
    }

    //#endregion
}