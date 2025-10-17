class BookModel {

    constructor(
        private _id: number,
        private _name?: string, // nullable
        private _price?: number,
        private _listedPrice?: number,
        private _description?: string,
        private _quantity?: number,
        private _author?: string,
        private _averageRating?: number,
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

    // Getter & Setter cho price
    get price(): number | undefined {
        return this._price;
    }
    set price(value: number | undefined) {
        this._price = value;
    }

    // Getter & Setter cho listedPrice
    get listedPrice(): number | undefined {
        return this._listedPrice;
    }
    set listedPrice(value: number | undefined) {
        this._listedPrice = value;
    }

    // Getter & Setter cho description
    get description(): string | undefined {
        return this._description;
    }
    set description(value: string | undefined) {
        this._description = value;
    }

    // Getter & Setter cho quantity
    get quantity(): number | undefined {
        return this._quantity;
    }
    set quantity(value: number | undefined) {
        this._quantity = value;
    }

    // Getter & Setter cho author
    get author(): string | undefined {
        return this._author;
    }
    set author(value: string | undefined) {
        this._author = value;
    }

    // Getter & Setter cho averageRating
    get averageRating(): number | undefined {
        return this._averageRating;
    }
    set averageRating(value: number | undefined) {
        this._averageRating = value;
    }
}

export default BookModel;
