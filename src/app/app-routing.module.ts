import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./features/project/project.module').then(m => m.ProjectModule),
	},
	{
		path: '**',
		redirectTo: 'project-list',
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
