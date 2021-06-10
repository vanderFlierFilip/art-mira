import {Component, Input, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {CheckoutService} from '../checkout.service';
import {BasketService} from '../../basket/basket.service';
import {ToastrService} from 'ngx-toastr';
import {IOrder} from '../../shared/models/order';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'neg-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {
  @Input() checkoutForm: FormGroup;

  constructor(private basketService: BasketService, private checkoutService: CheckoutService,
              private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }



}
