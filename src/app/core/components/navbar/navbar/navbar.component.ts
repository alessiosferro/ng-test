import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {NavbarBrand} from "@app/shared/model/navbar-brand";
import {ConfigService} from "@app/core/services/config.service";

@Component({
  selector: 'ngptt-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements AfterViewInit {
  @Input()
  brand: NavbarBrand;

  constructor(
    private configService: ConfigService,
    private cdRef: ChangeDetectorRef
  ) { }

  get navList() {
    return this.configService.navList;
  }

  ngAfterViewInit(): void {
    this.cdRef.detach();
  }
}
