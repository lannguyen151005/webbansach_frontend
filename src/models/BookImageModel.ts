class BookImageModel {

    constructor(
        private _id: number,
        private _name?: string,
        private _isIcon?: boolean,
        private _link?: string,
        private _data?: string
    ) { }

    // Getter & Setter cho id
    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }

    // Getter & Setter cho name
    get name(): string | undefined {
        return this._name;
    }
    set name(value: string | undefined) {
        this._name = value;
    }

    // Getter & Setter cho isIcon
    get isIcon(): boolean | undefined {
        return this._isIcon;
    }
    set isIcon(value: boolean | undefined) {
        this._isIcon = value;
    }

    // Getter & Setter cho link
    get link(): string | undefined {
        return this._link;
    }
    set link(value: string | undefined) {
        this._link = value;
    }

    // Getter & Setter cho data
    get data(): string | undefined {
        return this._data;
    }
    set data(value: string | undefined) {
        this._data = value;
    }
}

export default BookImageModel;
