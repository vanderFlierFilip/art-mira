import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collections', loadChildren: () => import('./art-collections/art-collections.module').then(mod => mod.ArtCollectionsModule)},
  
  { path: 'art-classes', loadChildren: () => import('./art-classes/art-classes.module').then(mod => mod.ArtClassesModule)},
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
