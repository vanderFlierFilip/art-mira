import { ArtClassesModule } from './art-classes/art-classes.module';
import { AboutMeModule } from './about-me/about-me.module';
import { HomeModule } from './home/home.module';
import { ArtCollectionsModule } from './art-collections/art-collections.module';
import { ArtworksShopModule } from './art-collections/artworks-shop/artworks-shop.module';
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
    ArtCollectionsModule,
    ArtworksShopModule,
    HomeModule,
    AboutMeModule,
    ArtClassesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
