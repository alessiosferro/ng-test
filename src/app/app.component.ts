import { Component } from '@angular/core';
import {NavbarBrand} from "@app/shared/model/navbar-brand";

@Component({
  selector: 'fs-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public title = 'ngptt';

  public brand: NavbarBrand = {
    href: '#',
    title: 'NG Project Tracking Tool'
  };
}
