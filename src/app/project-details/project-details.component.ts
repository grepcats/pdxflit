import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private location: Location, private projectsService: ProjectsService) { }
  projectId: string
  project;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.projectId = urlParameters['id'];
    })
    this.project = this.projectsService.getProjectById(this.projectId)
  }
}
