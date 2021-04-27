import { IArtwork } from './../../../shared/models/artwork';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtCollectionsService } from '../../art-collections.service';

@Component({
  selector: 'neg-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.scss']
})
export class ArtworkDetailsComponent implements OnInit {
  artwork: IArtwork;
  constructor (private artCollectionsService: ArtCollectionsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadArtwork();
  }

  loadArtwork() {
    this.artCollectionsService.getArtwork(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(response => {
      this.artwork = response;
    }, error => {
      console.log('ERROR: ', error);
    });
  }


}