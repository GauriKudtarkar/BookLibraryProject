import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTable } from '../Models/DataTable';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() Data: DataTable;
  @Output() emitaction: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  setClass(action: string) {
    let styleName: string;

    switch (action) {
      case "MoveUp":
        styleName = "glyphicon glyphicon-arrow-up";
        break;
      case "MoveDown":
        styleName = "glyphicon glyphicon-arrow-down";
        break;
      case "Edit":
        styleName = "glyphicon glyphicon-edit";
        break;
      case "Clone":
        styleName = "glyphicon glyphicon-copy";
        break;
      case "Enable":
        styleName = "glyphicon glyphicon-ok-sign";
        break;
      case "Disable":
        styleName = "glyphicon glyphicon-remove-sign";
        break;
      case "Delete":
        styleName = "glyphicon glyphicon-remove-sign";
        break;
      default:
        break;
    }
    console.log("class name:" + styleName);
    return styleName;
  }

  getValue(row: object, propName: string) {
    return row[propName];
  }

  setRowClass(row: any) {
    let rowClass: string;
    console.log(row.Actions.indexOf("Enable"));
    if (row.Actions.indexOf("Enable") > 0) {
      rowClass = "warning";
    }
    return rowClass;
  }

  // SearchGrid(event) {
  //   let isCriteriaMatched: boolean = true;
  //   this.Data.Rows = [];
  //   this.FilteredData.forEach(row => {
  //     debugger;
  //     isCriteriaMatched = true;
  //     this.Data.Headers.forEach(head => {
  //       if (head.IsSearchable && head.SearchedValue) {
  //         console.log("Header:" + head.Name + " SearchedValue:" + head.SearchedValue);
  //         if (!(row[head.Name] == head.SearchedValue)) {

  //           isCriteriaMatched = false;
  //         }
  //       }
  //     });
  //     if (isCriteriaMatched) {
  //       this.Data.Rows.push(row);
  //     }
  //   });

  //   if (this.Data.Rows.length > 0) {
  //     this.Data.HasRows = true;
  //   }
  //   else {
  //     this.Data.HasRows = false;
  //   }
  // }

  // ClearSearch(event) {
  //   debugger;
  //   this.FilteredData.forEach(row => {
  //     this.Data.Rows.push(row);
  //   });

  // }

  PerformAction(row:any,action:string) {
    debugger;
    this.emitaction.emit({row,action});
  }
  GetFilterValue() {
    debugger;
    let SearchObject: { [k: string]: any } = {};
    this.Data.Headers.forEach(header => {
      SearchObject[header.Name] = header.SearchedValue;
    });
    return SearchObject;
  }


}
