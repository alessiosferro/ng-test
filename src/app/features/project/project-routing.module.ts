import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectListComponent} from "@app/features/project/project-list/project-list.component";
import {ProjectDetailComponent} from "@app/features/project/project-detail/project-detail.component";
import {ProjectDetailResolver} from "@app/features/project/project-detail/project-detail.resolver";

const routes: Routes = [
	{
		path: 'project-list',
		component: ProjectListComponent
	},
	{
		path: 'project/:projectId',
		component: ProjectDetailComponent,
		resolve: { project: ProjectDetailResolver }
	},
	{
		path: '',
		redirectTo: 'project-list',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProjectRoutingModule {}
