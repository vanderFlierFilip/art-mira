import { ArtworkDetailsComponent } from './artworks-shop/artwork-details/artwork-details.component';
import { ArtworksShopComponent } from './artworks-shop/artworks-shop.component';
import { ArtCollectionsRoutingModule } from './art-collections-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtCollectionsComponent } from './art-collections.component';
import { SectionHeaderComponent } from './artworks-shop/section-header/section-header.component';



@NgModule({
  declarations: [ArtCollectionsComponent, ArtworksShopComponent, ArtworkDetailsComponent, SectionHeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    ArtCollectionsRoutingModule,
  ],
  exports: [ArtCollectionsComponent]
})
export class ArtCollectionsModule { }
