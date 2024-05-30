import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {getProductsState, productErrorAction, productRequestAction, productResponseAction} from "../../store/app.actions";
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
              console.log(res, '--------productsRequest$ -------')
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