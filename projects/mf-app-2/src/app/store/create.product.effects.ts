import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {createProductErrorAction, createProductRequestAction, createProductResponseAction} from "./app.actions";
import {ProductService} from "../service/product.service";

@Injectable()
export class CreateProductEffects {
  constructor(private actions$: Actions, private authService: ProductService) {
  }

  createProductRequest$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          createProductRequestAction),
        mergeMap((action) => {
          console.log('1111')
          return this.authService.createProduct(action.payload).pipe(
            map((res: any) => {
              console.log('2222')
              return createProductResponseAction({payload: res})
            }),
            catchError((error) => of(createProductErrorAction(error)))
          )
        })
      )
  );

}
