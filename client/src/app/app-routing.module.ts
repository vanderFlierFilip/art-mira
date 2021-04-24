import { ArtClassesComponent } from './art-classes/art-classes.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArtCollectionsComponent } from './art-collections/art-collections.component';
import { ArtworksShopComponent } from './art-collections/artworks-shop/artworks-shop.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'collections', component: ArtCollectionsComponent},
  {path: 'collections/:id', component: ArtworksShopComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'art-classes', component: ArtClassesComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
