import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {delay, of} from 'rxjs';
import {ProductRequestModel} from "../../models/product.model";

const PRODUCT_DATA = {
  success: 200,
  data: {
    isAuth: true,
    products: [{
      name: 'Toast',
      type: 'Lite Breakfast',
      price: 55.2
    }]
  }
}

const PRODUCTS_DATA = {
  success: 200,
  data: {
    isAuth: true,
    products: [
      {
        name: 'Cornflakes',
        type: 'Breakfast',
        price: 15.9
      },
      {
        name: 'Omlet',
        type: 'Breakfast',
        price: 55.2
      },
      {
        name: 'Beacon sandwich',
        type: 'BRK Sandwiches',
        price: 23.8
      },
      {
        name: 'Sausage Bacon Egg',
        type: 'BRK Sandwiches',
        price: 45.0
      },
    ]
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly url = 'https://www.tabit.cloud/';

  constructor(private httpClient: HttpClient) {
  }

  createProduct(payload: ProductRequestModel) {
    return of(PRODUCT_DATA).pipe(delay(1000)); // only for simulation that something is loaded
  }

  getAllProducts() {
    return of(PRODUCTS_DATA).pipe(delay(4500)); // only for simulation that something is loaded
  }
}
