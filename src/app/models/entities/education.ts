export class Education {

    //#region Properties

    public from: number | null;

    public to: number | null;

    public role: string;

    public university: string;

    //#endregion

    //#region Constructor

    public constructor() {
        this.from = null;
        this.to = null;
        this.role = '';
        this.university = '';
    }

    //#endregion

}