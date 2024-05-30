import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {getProductsState} from "../../../../host-app/src/store/app.actions";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NgForOf, NgIf} from "@angular/common";
import {ProductRequestModel} from "../models/product.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatProgressBarModule,
    NgIf,
    NgForOf,

  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  inProgress: boolean = true;
  products: ProductRequestModel[] = [];

  constructor(private _store: Store<any>) {
    this._store.select("products").pipe(takeUntilDestroyed()).subscribe((data: any) => {
      console.log(data, 'CHECK products STORE')
      // check if we have data
      if (data && data.products) {
        console.log(data, 'FROM STORE')
        this.inProgress = false;
        this.products = data.products;
      } else { // no data from store get from server
        // add value in to store
        this._store.dispatch(getProductsState());
        setTimeout(() => { this.inProgress = false }, 4000);
      }
    })

  }
}
