import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';


import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    RouterModule
  ],
  exports: [NavBarComponent]
})
export class CoreModule { }
