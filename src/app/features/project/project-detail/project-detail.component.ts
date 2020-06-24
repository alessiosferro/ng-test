import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Project} from "@app/shared/model/project.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'ngptt-project-detail',
  templateUrl: './project-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDetailComponent implements OnInit {
  project$: Observable<Project>;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.project$ = this.getProjectRouteData();
  }

  getProjectRouteData() {
    return this.route.data.pipe(
      map(({ project }) => project)
    );
  }
}
