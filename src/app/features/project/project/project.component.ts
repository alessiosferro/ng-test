import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Project} from "@app/shared/model/project.model";

@Component({
  selector: 'ngptt-project',
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
  @Input()
  public project: Project;

  @Output()
  public selectProject = new EventEmitter<Project>();
}
