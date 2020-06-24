import {NgModule} from "@angular/core";
import {NavbarComponent} from "@app/core/components/navbar/navbar/navbar.component";
import {NavbarListComponent} from "@app/core/components/navbar/navbar-list/navbar-list.component";
import {NavbarListItemComponent} from "@app/core/components/navbar/navbar-list-item/navbar-list-item.component";
import {CommonModule} from "@angular/common";

@NgModule({
	declarations: [
		NavbarComponent,
		NavbarListComponent,
		NavbarListItemComponent
	],
	exports: [
		NavbarComponent,
		NavbarListComponent,
		NavbarListItemComponent
	],
	imports: [
		CommonModule
	]
})
export class NavbarModule {}
