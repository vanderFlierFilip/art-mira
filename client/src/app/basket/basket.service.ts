import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Basket, IBasket, IBasketItem, IBasketTotals} from '../shared/models/basket';
import {map} from 'rxjs/operators';
import {IArtwork} from '../shared/models/artwork';
import {IDeliveryMethod} from '../shared/models/deliveryMethod';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiUrl;
  private basketSource =  new BehaviorSubject<IBasket>(null);
  private basketTotalSource = new BehaviorSubject<IBasketTotals>(null);
  basketTotal$ = this.basketTotalSource.asObservable();
  basket$ = this.basketSource.asObservable();
  shipping = 0;
  constructor(private http: HttpClient) {
  }

  setShippingPrice(deliveryMethod: IDeliveryMethod) {
    this.shipping = deliveryMethod.price;
    this.calculateTotals()
  }
  getBasket(id: string) {
    return this.http.get(this.baseUrl + 'Baskets?id=' + id)
      .pipe(
        map((basket: IBasket) => {
          this.basketSource.next(basket);
          this.calculateTotals();
          }
        )
    );
  }

  setBasket(basket: IBasket) {
    return this.http.post(this.baseUrl + 'Baskets', basket).subscribe((response: IBasket) => {
        this.basketSource.next(response);
        this.calculateTotals();
      }
    );
  }

  getCurrentBasketValue() {
    return this.basketSource.value;
  }

  addItemToBasket(item: IArtwork, name= 'Peace') {
    const itemToAdd: IBasketItem = this.mapArtworkItemToBasketItem(item, name);
    const basket = this.getCurrentBasketValue() ?? this.createBasket();
    basket.items = this.dontAddDuplicateItems(basket.items, itemToAdd);
    this.setBasket(basket);
  }

  private mapArtworkItemToBasketItem(item: IArtwork, name: string): IBasketItem {
    return {
      id: item.id,
      artworkName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl
    };
  }

  private createBasket(): IBasket {
    const basket = new Basket();
    localStorage.setItem('basket_id', basket.id);
    return basket;
  }

  private dontAddDuplicateItems(items: IBasketItem[], itemToAdd: IBasketItem): IBasketItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      items.push(itemToAdd);
    }
    return items;
  }
  private calculateTotals() {
    const basket = this.getCurrentBasketValue();
    const shipping = this.shipping;
    const subtotal = basket.items.reduce((a,b) => b.price + a, 0);
    const total = subtotal + shipping;
    this.basketTotalSource.next({
      subtotal, total, shipping
    });
  }
  removeItemFromBasket(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    if (basket.items.some(x => x.id === item.id)) {
      basket.items = basket.items.filter(i => i.id !== item.id);
      if (basket.items.length > 0) {
        this.setBasket(basket);
        }else {
        this.deleteBasket(basket);
      }
    }
  }

  deleteBasket(basket: IBasket) {
        return this.http.delete(this.baseUrl + 'Baskets?id=' + basket.id).subscribe(() => {
          this.basketSource.next(null);
          this.basketSource.next(null);
          localStorage.removeItem('basket_id');
        }, error => console.log(error));
    }
  deleteLocalBasket(id: string) {
    this.basketSource.next(null);
    this.basketTotalSource.next(null);
    localStorage.removeItem('basket_id');
  }

}
