import { MediaType } from './media-type';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class MediaTypeService {
  api_url = 'http://localhost:8080';
  mediaTypesUrl = `${this.api_url}/api/media_types`;

  constructor(private http: HttpClient) {
  }

  getMediaTypes(): Observable<MediaType[]> {
    return this.http
        .get<MediaType[]>(this.mediaTypesUrl)
        .pipe(
          catchError(this.handleError('getMediaTypes', []))
        );
  }

  /** GET MediaType by id. Will 404 if id not found */
  getMediaType(id: number): Observable<MediaType> {
    const url = `${this.mediaTypesUrl}/${id}`;
    return this.http.get<MediaType>(url).pipe(
      // tap(_ => this.log(`fetched MediaType id=${id}`)),
      catchError(this.handleError<MediaType>(`getMediaType id=${id}`))
    );
  }

  /* GET MediaType whose name contains search term */
  searchMediaTypes(term: string): Observable<MediaType[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<MediaType[]>(`${this.mediaTypesUrl}/?name=${term}`).pipe(
      // tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<MediaType[]>('searchMediaTypes', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
