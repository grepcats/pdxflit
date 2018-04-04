import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectsService } from '../projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
