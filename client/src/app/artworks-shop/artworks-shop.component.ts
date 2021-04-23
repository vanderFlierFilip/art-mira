import { ArtworksService } from './artworks.service';
import { IArtwork } from './../shared/models/artwork';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neg-artworks-shop',
  templateUrl: './artworks-shop.component.html',
  styleUrls: ['./artworks-shop.component.scss']
})
export class ArtworksShopComponent implements OnInit {
  artworks: IArtwork[];
  constructor(private artworkService: ArtworksService) { }

  ngOnInit(): void {
    this.artworkService.getArtworks().subscribe(response => {
      this.artworks = response.data;
    }, error => {
      console.log(error);
    });
  }

}
