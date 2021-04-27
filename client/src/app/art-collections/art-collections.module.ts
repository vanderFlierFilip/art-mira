import { ArtworkDetailsComponent } from './artworks-shop/artwork-details/artwork-details.component';
import { ArtworksShopComponent } from './artworks-shop/artworks-shop.component';
import { ArtCollectionsRoutingModule } from './art-collections-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtCollectionsComponent } from './art-collections.component';



@NgModule({
  declarations: [ArtCollectionsComponent, ArtworksShopComponent, ArtworkDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ArtCollectionsRoutingModule
  ],
  exports: [ArtCollectionsComponent]
})
export class ArtCollectionsModule { }
