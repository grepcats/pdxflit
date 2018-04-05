import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProjectsService } from '../projects.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectsService]
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private projectsService: ProjectsService, private router: Router) { }
  projectId: string
  project;
  editClicked: boolean = false;

  clickDonate(){
    this.router.navigate(['donate', this.project.$key])
  }

  closeForm(value: boolean) {
    this.editClicked = false;
  }

  clickEdit() {
    this.editClicked = true;
  }

  updateVolunteers() {
    this.projectsService.updateVolunteers(this.project);
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.projectId = urlParameters['id'];
    })
    this.projectsService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.project = dataLastEmittedFromObserver;
    })
  }
}
