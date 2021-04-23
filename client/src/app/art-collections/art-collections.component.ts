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

  ngOnInit(): void {
    this.artCollectionService.getArtCollections().subscribe(response => {
      this.artCollections = response;
      console.log(this.artCollections);
    }, error => console.log(error));
  }

}
