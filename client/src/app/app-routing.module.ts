import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule)},
  { path: 'collections', loadChildren: () => import('./art-collections/art-collections.module').then(mod => mod.ArtCollectionsModule)},
  { path: 'art-classes', loadChildren: () => import('./art-classes/art-classes.module').then(mod => mod.ArtClassesModule)},
  { path: 'checkout', canActivate: [AuthGuard], loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule)},
  { path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)},


  { path: 'art-classes', loadChildren: () => import('./art-classes/art-classes.module').then(mod => mod.ArtClassesModule)},
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
