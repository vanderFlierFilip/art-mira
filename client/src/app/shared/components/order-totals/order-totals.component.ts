import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Basket, IBasketTotals} from '../../models/basket';
import {BasketService} from '../../../basket/basket.service';

@Component({
  selector: 'neg-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  basketTotal$: Observable<IBasketTotals>;
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketTotal$ = this.basketService.basketTotal$;
  }

}
