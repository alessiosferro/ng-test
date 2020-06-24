import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Project} from "@app/shared/model/project.model";

@Component({
  selector: 'ngptt-project-detail',
  templateUrl: './project-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailComponent {
  @Input()
  project: Project;
}
