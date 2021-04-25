import { ActivatedRoute } from '@angular/router';
import { ArtClassesService } from './../art-classes.service';
import { Component, OnInit } from '@angular/core';
import { IArtClass } from 'src/app/shared/models/art-class';

@Component({
  selector: 'neg-art-classes-details',
  templateUrl: './art-classes-details.component.html',
  styleUrls: ['./art-classes-details.component.scss']
})
export class ArtClassesDetailsComponent implements OnInit {
  artClass: IArtClass;

  constructor(private artClassesService: ArtClassesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadArtClassDetails();
  }
  loadArtClassDetails() {
    this.artClassesService.getArtClass(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(response => {
      this.artClass = response;
    }, error => console.log(error));
  }

}
