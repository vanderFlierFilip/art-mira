import { Observable } from 'rxjs';
import { IPagination } from '.././../shared/models/pagination';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtworksService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getArtworks(): Observable<IPagination> {
     return this.http.get<IPagination>(this.baseUrl + 'artworks?pageSize=100');
  }
}
