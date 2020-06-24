import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Project} from "@app/shared/model/project.model";
import {Observable, of} from "rxjs";
import {ProjectService} from "@app/core/services/project.service";
import {take, tap} from "rxjs/operators";

@Injectable()
export class ProjectDetailResolver implements Resolve<Project> {

	constructor(
		private projectService: ProjectService
	) {}

	resolve(route: ActivatedRouteSnapshot): Observable<Project> {
		const { projectId } = route.params;

		return this.projectService.getProject(projectId).pipe(
			take(1)
		);
	}
}
