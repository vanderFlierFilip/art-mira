import {Component, Input, OnInit} from '@angular/core';
import {ArtCollectionsService} from "../../art-collections.service";
import {ActivatedRoute} from "@angular/router";
import {IArtCollection} from "../../../shared/models/art-collection";
import {Observable} from "rxjs";

@Component({
  selector: 'neg-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  artCollection: IArtCollection;
  constructor(private artCollectionsService: ArtCollectionsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCollectionInfo();
  }
  loadCollectionInfo() {
    this.artCollectionsService.getArtCollectionsById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(collection => {
      this.artCollection = collection;
      console.log(this.artCollection);
    });
  }

}
