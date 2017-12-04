export class Book {

    constructor(bookcode: number, bookname: string, publisher: string,
         rate: number, image: string,actions:string[]) {
        this.bookCode = bookcode;
        this.bookName = bookname;
        this.publisher = publisher;
        this.rate = rate;
        this.image = image;
        this.actions=actions;
    }


    private bookCode: number;
    public get BookCode() {
        return this.bookCode;
    }

    public set BookCode(bookcode: number) {
        this.BookCode = bookcode;
    }

    private bookName: string;
    public get BookName() {
        return this.bookName;
    }
    public set BookName(bookName: string) {
        this.bookName = bookName;
    }

    private publisher: string;
    public get Publisher() {
        return this.publisher;
    }
    public set Publisher(publisher: string) {
        this.publisher = publisher;
    }

    private rate: number;
    public get Rate() {
        return this.rate;
    }
    public set Rate(rate: number) {
        this.rate = rate;
    }

    private image: string;
    public get Image() {
        return this.image;
    }
    public set Image(rate: string) {
        this.image = rate;
    }

    private isImageVisible: boolean;
    public get IsImageVisible() {
        return this.isImageVisible;
    }
    public set IsImageVisible(isVisible: boolean) {
        this.isImageVisible = isVisible;
    }

    private actions: string[];
    public get Actions() {
        return this.actions;
    }
    public set Actions(actions: string[]) {
        this.actions = actions;
    }
}
