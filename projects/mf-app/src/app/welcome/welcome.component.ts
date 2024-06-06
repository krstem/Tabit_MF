import { Component } from '@angular/core';
import {NgxTabitUiComponent} from "ngx-tabit-ui";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    NgxTabitUiComponent
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
