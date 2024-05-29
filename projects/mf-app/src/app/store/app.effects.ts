import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {getProductsState, productErrorAction, productRequestAction, productResponseAction} from "./app.actions";
import {ProductService} from "../service/product.service";

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {
  }

  productsRequest$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getProductsState),
        mergeMap(() => {
          return this.productService.getAllProducts().pipe(
            map((res: any) => {
              console.log(res, '---------------')
              return productResponseAction({payload: res})
            }),
            catchError((error) => of(productErrorAction(error)))
          )
        })
      )
  );

  productRequest$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          productRequestAction),
        mergeMap((action) => {
          return this.productService.createProduct(action.payload).pipe(
            map((res: any) => {
              return productResponseAction({payload: res})
            }),
            catchError((error) => of(productErrorAction(error)))
          )
        })
      )
  );
}

export const Effects = [
  ProductEffects
]
