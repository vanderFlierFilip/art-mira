import { IArtClass } from './../shared/models/art-class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtClassesService {
  URL = 'https://localhost:5001/api/';
  
  constructor(private http: HttpClient) { }

  getArtClassesService(): Observable<IArtClass[]> {
    return this.http.get<IArtClass[]>(this.URL + 'artclasses');
  }
  getArtClass(id: number) {
    return this.http.get<IArtClass>(this.URL + 'artclasses/' + id);
  }

}
