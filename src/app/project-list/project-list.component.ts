import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectsService } from '../projects.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers : [ProjectsService]
})
export class ProjectListComponent implements OnInit {
  projects;
  constructor(private router: Router, private projectsService: ProjectsService) { }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key])
  }
  ngOnInit() {
    console.log(this.projects);
    this.projectsService.getProjects().subscribe(dataLastEmittedFromObserver => {
      this.projects = dataLastEmittedFromObserver;
      console.log(this.projects);
    })
  }

}
