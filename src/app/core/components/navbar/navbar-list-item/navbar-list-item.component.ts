import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NavItem} from "@app/shared/model/nav-item.model";

@Component({
  selector: 'ngptt-navbar-list-item',
  templateUrl: './navbar-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarListItemComponent {
  @Input()
  item: NavItem;
}
