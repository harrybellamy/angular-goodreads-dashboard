import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Channel, Book } from './goodreads-models';
import { catchError, map, tap } from 'rxjs/operators';
import { Parser } from 'xml2js'; 

@Injectable({
  providedIn: 'root'
})
export class GoodreadsService {

  private goodreadsUrl = '/data';
  private currentlyReadingUrl = '/currently-reading-data'

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'text'})
  };

  constructor(private http: HttpClient) { }

  getData(): Observable<Channel> {
    return this.getDataFromUrl(this.goodreadsUrl);
  }

  getCurrentlyReadingData(): Observable<Channel> {
    return this.getDataFromUrl(this.currentlyReadingUrl);
  }

  private getDataFromUrl(url: string): Observable<Channel> {
    return this.http.get(url, { responseType: 'text' })
      .pipe(
        map(data => this.parseXml(data as string))
    );
  }

  getBookWithId(id: string) : Observable<Book|undefined> {
    return this.getData()
      .pipe(
        map(data => data.items.find(f => f.id == id))
      );
  }

  private parseXml(data: string): Channel {
    var parser = new Parser({  
      trim: true,  
      explicitArray: true  
    }); 

    let channel = <Channel>{};

    parser.parseString(data, function(err: Error, result: any) {
      var items: Book[] = [];

      result.rss.channel[0].item.forEach(function(fe: any) {
        items.push({
          title: fe.title[0],
          imageUrl: fe.book_image_url[0],
          largeImageUrl: fe.book_large_image_url[0],
          author: fe.author_name[0],
          createdDate: fe.user_date_created[0],
          id: fe.book[0].$.id,
          userRating: Number(fe.user_rating[0]),
          averageRating: Number(fe.average_rating[0])
        });
      })

      channel.items = items;
    });

    return channel;
  }  

  private log(message: string) {
    // TODO: provide implementation
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
