export class DataTable {
    public Headers: Header[];
    public Rows: any[];
    public HasRows: boolean;
}

export class Header {
    constructor(name: string, label: string, isAction: boolean = false, isSearchable: boolean = false, searchedValue: string = "") {
        this.Name = name;
        this.Label = label;
        this.IsAction = isAction;
        this.IsSearchable = isSearchable;
        this.SearchedValue = searchedValue;
    }
    public Name: string;
    public Label: string;
    public IsAction: boolean;
    public IsSearchable: boolean;
    public SearchedValue: string;
}