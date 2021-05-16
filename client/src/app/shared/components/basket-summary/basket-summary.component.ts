import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasketService} from '../../../basket/basket.service';
import {Observable} from 'rxjs';
import {IBasket, IBasketItem} from '../../models/basket';

@Component({
  selector: 'neg-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  basket$: Observable<IBasket>;
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  removeBasketItem(item: IBasketItem) {
    this.remove.emit(item);
  }
}
