import { IArtCollection } from './../shared/models/art-collection';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtCollectionsService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }

  getArtCollections() {
    return this.http.get<IArtCollection[]>(this.baseUrl + 'artcollections');
  }
  getArtworks(id: number) {
    return this.http.get<IArtCollection>(this.baseUrl + 'artcollections/' + id);
  }
}
