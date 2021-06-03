import { IArtCollection } from './../shared/models/art-collection';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArtwork } from '../shared/models/artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtCollectionsService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }

  getArtCollections() {
    return this.http.get<IArtCollection[]>(this.baseUrl + 'artcollections');
  }
  getArtCollectionsById(id: number) {
    return this.http.get<IArtCollection>(this.baseUrl + 'artcollections/' + id);
  }
  getArtworksFromCollection(id: number) {
    return this.http.get<IArtCollection>(this.baseUrl + 'artcollections/' + id);
  }
  getArtwork(id: number) {
    return this.http.get<IArtwork>(this.baseUrl + 'artworks/' + id);
  }
}

