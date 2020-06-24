import {NgModule} from "@angular/core";
import {ProjectComponent} from "@app/features/project/project/project.component";
import {ProjectDetailComponent} from "@app/features/project/project-detail/project-detail.component";
import {ProjectListComponent} from "@app/features/project/project-list/project-list.component";
import {CommonModule} from "@angular/common";
import {ProjectRoutingModule} from "@app/features/project/project-routing.module";
import {ProjectDetailResolver} from "@app/features/project/project-detail/project-detail.resolver";
import {ProjectPreviewComponent} from "@app/features/project/project-preview/project-preview.component";

@NgModule({
	declarations: [
		ProjectComponent,
		ProjectDetailComponent,
		ProjectListComponent,
		ProjectPreviewComponent
	],
	exports: [
		ProjectComponent,
		ProjectDetailComponent,
		ProjectListComponent
	],
	imports: [
		CommonModule,
		ProjectRoutingModule,
	],
	providers: [
		ProjectDetailResolver
	]
})
export class ProjectModule {}
