import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {delay, of} from 'rxjs';
import {ProductRequestModel} from "../../models/product.model";

const PRODUCT_DATA = {
  success: 200,
  data: {
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

  createProduct(payload: any) {
    console.log(payload, '***************')
    return of({
      success: 200,
      data: {
        products: [payload]
      }
    }).pipe(delay(1000)); // only for simulation that something is loaded, WE Return the same only to update the store (this can be object from server)
  }

  getAllProducts() {
    return of(PRODUCTS_DATA).pipe(delay(4500)); // only for simulation that something is loaded
  }
}
