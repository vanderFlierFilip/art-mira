import { ArtCollectionsService } from './art-collections.service';
import { IArtCollection } from './../shared/models/art-collection';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neg-art-collections',
  templateUrl: './art-collections.component.html',
  styleUrls: ['./art-collections.component.scss']
})
export class ArtCollectionsComponent implements OnInit {
  artCollections: IArtCollection[];
  constructor(private artCollectionService: ArtCollectionsService) { }

  ngOnInit(){
    this.artCollectionService.getArtCollections().subscribe(response => {
      this.artCollections = response;
    }, error => console.log(error));
  }

}
