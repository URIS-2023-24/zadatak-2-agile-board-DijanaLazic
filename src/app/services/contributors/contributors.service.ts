import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {
 

  baseUrl="https://app.microenv.com/backend/key/474506bfa7fee2c9012612/rest/api/cntributors/"

  constructor(private http: HttpClient) { }

  public getContributors() : Observable<any> {
    return this.http.get(this.getUrl())
      .pipe(map((response: Response) => response));
  }
   private getUrl(): string {
    return `${this.baseUrl}`;
    }
}
