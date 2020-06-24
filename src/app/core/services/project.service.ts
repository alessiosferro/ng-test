import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Project} from "@app/shared/model/project.model";

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	constructor(
		private http: HttpClient
	) {}

	getProjects() {
		return this.http.get<Project[]>('projects');
	}

	getProject(id: number) {
		return this.http.get<Project>(`projects/${id}`);
	}
}
