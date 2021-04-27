import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtCollectionsComponent } from './art-collections.component';
import { ArtworksShopComponent } from './artworks-shop/artworks-shop.component';
import { ArtworkDetailsComponent } from './artworks-shop/artwork-details/artwork-details.component';

const routes: Routes = [
  { path: '', component: ArtCollectionsComponent },
  { path: ':id', component: ArtworksShopComponent},
    {path: ':id/artworks/:id', component: ArtworkDetailsComponent}
  ];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ArtCollectionsRoutingModule { }
