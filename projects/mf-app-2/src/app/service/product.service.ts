import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {delay, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = 'xyz.com';

  constructor(private httpClient: HttpClient) {
  }

  createProduct(payload: any) {
    return of({
      success: 200,
      data: payload
    }).pipe(delay(3000)); // only for simulation that something is loaded
  }
}
