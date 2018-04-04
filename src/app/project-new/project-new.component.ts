import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectsService } from '../projects.service';
import { Router } from '@angular/router';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css'],
  providers: [ProjectsService]
})
export class ProjectNewComponent implements OnInit {

  constructor(private router: Router, private projectsService: ProjectsService) { }

  ngOnInit() {
  }

  addProject(projectName: string, projectStarters: string, projectDescription: string, projectGoal: string, projectPlans: string, projectRewards: string) {
    let starterArray = projectStarters.split(", ");
    let rewardsArray = projectRewards.split(", ");


    this.projectsService.addProject(new Project(projectName, starterArray, projectDescription, parseInt(projectGoal), projectPlans, rewardsArray));
  }

}
