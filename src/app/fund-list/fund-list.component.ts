import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectsService } from '../projects.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css'],
  providers : [ProjectsService]
})
export class FundListComponent implements OnInit {
  projects;
  constructor(private router: Router, private projectsService: ProjectsService) { }

  goToDetailPage(clickedProject) {
    this.router.navigate(['fund', clickedProject.$key])
  }
  ngOnInit() {
    console.log(this.projects);
    this.projectsService.getProjects().subscribe(dataLastEmittedFromObserver => {
      this.projects = dataLastEmittedFromObserver;
      console.log(this.projects);
    })
  }

}
