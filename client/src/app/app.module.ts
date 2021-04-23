import { ArtCollectionsModule } from './art-collections/art-collections.module';
import { ArtworksShopModule } from './artworks-shop/artworks-shop.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ArtworksShopModule,
    ArtCollectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
