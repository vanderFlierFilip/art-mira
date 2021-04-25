import { IArtClass } from './../shared/models/art-class';
import { ArtClassesService } from './art-classes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neg-art-classes',
  templateUrl: './art-classes.component.html',
  styleUrls: ['./art-classes.component.scss']
})
export class ArtClassesComponent implements OnInit {
  artClasses: IArtClass[];
  constructor(private classesService: ArtClassesService) { }

  ngOnInit(): void {
    this.classesService.getArtClassesService().subscribe(classes => {
      this.artClasses = classes;
    });
  }

}
