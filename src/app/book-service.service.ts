import { Injectable } from '@angular/core';
import { Header } from './Models/DataTable';
import { Book } from './Models/Book';

@Injectable()
export class BookServiceService {

  public static GetBookHeaders():Header[]
  {
    let headers: Header[];
    headers=[
      new Header ("BookCode",  "Book Code",  false, true,  "" ),
      new Header ("BookName",  "Book Name",  false, true,  "" ),
      new Header ("Publisher",  "Publisher",  false, true,  "" ),
      new Header ("Rate",  "Rate",  false, true,  "" ), 
      new Header ("Image",  "Image",  false, false,  "" ),
      new Header ("Actions",  "",true, false,  "" )
    ]
    return headers; 
  }

  public static GetBooks():Book[]
  {
    let books: Book[];
    books=[
      new Book (1,"Immortal Talks",  "Shunya", 100, "",["Edit","Delete"] ),
      new Book (2,"The Vortex",  "The HayHouse", 400, "",["Edit","Delete"] ),
    ]
    return books; 
  }


  constructor() { }

}
