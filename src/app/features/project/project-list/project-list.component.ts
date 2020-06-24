import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Project} from '@app/shared/model/project.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProjectService} from "@app/core/services/project.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ngptt-project-list',
  templateUrl: './project-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {
  projects$: Observable<Project[]>;
  selectedProject: Project;

  constructor(
    private projectService: ProjectService,
    private routerService: Router,
    private activatedRouteService: ActivatedRoute
  ) { }

  ngOnInit() {
    this.projects$ = this.projectService.getProjects();
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    this.routerService.navigate(['../project', project.id], { relativeTo: this.activatedRouteService })
  }
}
