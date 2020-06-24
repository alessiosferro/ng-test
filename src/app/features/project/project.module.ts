import {NgModule} from "@angular/core";
import {ProjectComponent} from "@app/features/project/project/project.component";
import {ProjectDetailComponent} from "@app/features/project/project-detail/project-detail.component";
import {ProjectListComponent} from "@app/features/project/project-list/project-list.component";
import {CommonModule} from "@angular/common";

@NgModule({
	declarations: [
		ProjectComponent,
		ProjectDetailComponent,
		ProjectListComponent
	],
	exports: [
		ProjectComponent,
		ProjectDetailComponent,
		ProjectListComponent
	],
	imports: [
		CommonModule
	]
})
export class ProjectModule {}
