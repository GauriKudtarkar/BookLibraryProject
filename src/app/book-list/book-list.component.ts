import { Component, OnInit } from '@angular/core';
import {Book} from '../Models/Book';
import {DataTableComponent} from '../data-table/data-table.component';
import {DataTable} from '../Models/DataTable';
import { BookServiceService } from '../book-service.service';
import { transition } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
Books:DataTable=new DataTable();

  constructor() {
    this.Books.Headers=BookServiceService.GetBookHeaders();
    this.Books.Rows=BookServiceService.GetBooks();
    this.Books.HasRows=true;
   }

  ngOnInit() {
  }

  public PerformActions(event){
    debugger;
    if(event.action=="Delete"){
      if(confirm("Do you really want to remove this book?"))
      {
        let index=this.Books.Rows.indexOf(event.row);
        this.Books.Rows.splice(index,1);
      }
    }
  }
}
