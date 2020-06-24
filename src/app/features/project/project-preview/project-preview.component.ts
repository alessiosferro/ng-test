import {Component, Input} from "@angular/core";
import {Project} from "@app/shared/model/project.model";

@Component({
	selector: 'ngptt-project-preview',
	templateUrl: './project-preview.component.html',
})
export class ProjectPreviewComponent {
	@Input()
	project: Project;
}
