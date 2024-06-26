import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {getProductsState, productErrorAction, productRequestAction, productResponseAction} from "../../../../../host-app/src/store/app.actions";
import {ProductsService} from "../service/products.service";

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private productService: ProductsService) {
  }

  productsRequest$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getProductsState),
        mergeMap(() => {
          return this.productService.getAllProducts().pipe(
            map((res: any) => {
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
        mergeMap((payload) => {
          return this.productService.createProduct(payload).pipe(
            map((res: any) => {
              return productResponseAction({payload: res})
            }),
            catchError((error) => of(productErrorAction(error)))
          )
        })
      )
  );
}
