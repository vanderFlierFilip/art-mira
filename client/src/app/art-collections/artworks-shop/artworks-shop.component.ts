import { ArtCollectionsService } from './../art-collections.service';
import { ArtworksService } from './artworks.service';
import { IArtwork } from '.././../shared/models/artwork';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'neg-artworks-shop',
  templateUrl: './artworks-shop.component.html',
  styleUrls: ['./artworks-shop.component.scss']
})
export class ArtworksShopComponent implements OnInit {
  artworks: IArtwork[];
  constructor(private artCollectionService: ArtCollectionsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadArtworks();
    
  }
  loadArtworks() {
    this.artCollectionService.getArtworks(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(response => {
      this.artworks = response.artworks;
    }, error => {
      console.log('ERROR: ', error);
    });
  }

}
