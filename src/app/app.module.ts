import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { DataFilterPipe } from './data-filter.pipe';
import { DataTableComponent } from './data-table/data-table.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookServiceService } from './book-service.service';


@NgModule({
  declarations: [
    AppComponent,
    DataFilterPipe,
    DataTableComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
