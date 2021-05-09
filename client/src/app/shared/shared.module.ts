import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { TextInputComponent } from './components/text-input/text-input.component';



@NgModule({
  declarations: [OrderTotalsComponent, OrderTotalsComponent, TextInputComponent],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    CarouselModule,
    OrderTotalsComponent,
    ReactiveFormsModule,
    BsDropdownModule,
    TextInputComponent
  ]
})
export class SharedModule { }
