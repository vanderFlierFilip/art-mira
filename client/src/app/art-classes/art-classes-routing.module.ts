import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArtClassesDetailsComponent } from './art-classes-details /art-classes-details.component';
import { ArtClassesComponent } from './art-classes.component';

const routes: Routes = [
  { path: '', component: ArtClassesComponent },
  { path: ':id', component: ArtClassesDetailsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArtClassesRoutingModule { }
