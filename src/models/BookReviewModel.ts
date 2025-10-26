class BookReviewModel {
    constructor(
        private _id: number,
        private _ratingScore: number,
        private _comment: string,
        private _bookId: number,
        private _userId: number
    ) {}

    // Getter và Setter cho id
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    // Getter và Setter cho ratingScore
    public get ratingScore(): number {
        return this._ratingScore;
    }

    public set ratingScore(value: number) {
        this._ratingScore = value;
    }

    // Getter và Setter cho comment
    public get comment(): string {
        return this._comment;
    }

    public set comment(value: string) {
        this._comment = value;
    }

    // Getter và Setter cho bookId
    public get bookId(): number {
        return this._bookId;
    }

    public set bookId(value: number) {
        this._bookId = value;
    }

    // Getter và Setter cho userId
    public get userId(): number {
        return this._userId;
    }

    public set userId(value: number) {
        this._userId = value;
    }
}

export default BookReviewModel;
