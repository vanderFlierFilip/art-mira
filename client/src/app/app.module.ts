import { ArtClassesModule } from './art-classes/art-classes.module';
import { AboutMeModule } from './about-me/about-me.module';
import { HomeModule } from './home/home.module';
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
     HomeModule,
    AboutMeModule,
    ArtClassesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
