import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../projects.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css'],
  providers: [ ProjectsService ]
})
export class ProjectEditComponent implements OnInit {
  @Input() projectToEdit;
  @Input() editClicked: boolean;
  projectId: string;

  beginUpdatingProject(projectToUpdate) {
    this.projectsService.updateProject(projectToUpdate);
  }

  clickEdit(value: boolean) {
    this.editClicked = value;
  }

  constructor(private route: ActivatedRoute, private location: Location, private projectsService: ProjectsService, private router: Router) { }

  ngOnInit() {
    console.log(this.router.url)
    this.route.params.forEach((urlParameters) => {
    this.projectId = urlParameters['id'];
    })

  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }



}