import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-donate-page',
  templateUrl: './donate-page.component.html',
  styleUrls: ['./donate-page.component.css'],
  providers: [ProjectsService]
})
export class DonatePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private projectsService: ProjectsService, private router: Router) { }
  projectId: string
  project;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.projectId = urlParameters['id'];
    })
    this.projectsService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.project = dataLastEmittedFromObserver;
    })
  }

  updateRaisedAmount(donation: string) {
    this.projectsService.updateRaisedAmount(this.project, parseInt(donation));
    this.router.navigate(['/projects/' + this.projectId]);
  }

}
