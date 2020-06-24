import {NgModule} from "@angular/core";
import {NavbarModule} from "@app/core/components/navbar/navbar.module";

@NgModule({
	imports: [NavbarModule],
	exports: [NavbarModule],
})
export class CoreModule {}
