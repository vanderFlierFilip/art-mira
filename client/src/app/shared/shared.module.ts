import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';



@NgModule({
  declarations: [OrderTotalsComponent, OrderTotalsComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CarouselModule,
    OrderTotalsComponent
  ]
})
export class SharedModule { }
