import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectsService } from '../projects.service'

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css'],
  providers : [ProjectsService]
})
export class FundListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
    console.log(this.projects);
  }

}
