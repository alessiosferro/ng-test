import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {Project} from '@app/shared/model/project.model';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ProjectService} from "@app/core/services/project.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ngptt-project-list',
  templateUrl: './project-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit, OnDestroy {
  previewProject$ = new BehaviorSubject<Project>(null);
  projects$: Observable<Project[]>;
  destroy$ = new Subject<void>();

  constructor(
    private projectService: ProjectService,
    private routerService: Router,
    private activatedRouteService: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.projects$ = this.projectService.getProjects();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectProject(project: Project) {
    this.routerService.navigate(['../project', project.id], { relativeTo: this.activatedRouteService })
  }
}
