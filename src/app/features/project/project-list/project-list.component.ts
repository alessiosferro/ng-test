import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Project} from '@app/shared/model/project.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProjectService} from "@app/core/services/project.service";

@Component({
  selector: 'ngptt-project-list',
  templateUrl: './project-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {
  projects$: Observable<Project[]>;
  selectedProject: Project;

  constructor(
    private httpService: HttpClient,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projects$ = this.projectService.getProjects();
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }
}
