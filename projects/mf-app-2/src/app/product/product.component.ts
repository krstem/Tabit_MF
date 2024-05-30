import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {createProductRequestAction} from "../store/app.actions";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {getProductsState, productRequestAction} from "../../../../host-app/src/store/app.actions";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productForm: FormGroup;
  inProgress: boolean = true;

  constructor(private formBuilder: FormBuilder, private _store: Store<any>) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1)]],
    });
    this.inProgress = true;
    this._store.select("product").pipe(takeUntilDestroyed()).subscribe((data: any) => {
      console.log(data, 'READING data from STORE for PRODUCT (single item on create)');
      if (data && data.product) {
        this.productForm.setValue({
          name: data.product.name,
          type: data.product.type,
          price: data.product.price,
        })
      }
      ;
      this.inProgress = false;

    });
    this._store.select("products").pipe(takeUntilDestroyed()).subscribe((data: any) => {
      console.log(data, 'CHECK products STORE')
    })
  }

  onSubmit(value: any): void {
    this.inProgress = true;
    if (this.productForm.valid) {
      console.log('Create product form submitted', value);
      // add value in to store
      this._store.dispatch(createProductRequestAction({payload: value}));


      this._store.dispatch(productRequestAction(value));
      setTimeout(() => { this.inProgress = false }, 4000);
    } else {
      this.inProgress = false;
    }
  }
}


