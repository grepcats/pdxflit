import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthenticationService, UserService]
})
export class ProfileComponent implements OnInit {
  userUID;
  databaseUser;
  constructor(private router: Router, private userService: UserService, public authService: AuthenticationService) {

  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (user != null) {
        this.userUID = user.uid;

      } else {
        console.log("you logged out");
      }
    })

    this.userService.getUserByUID(this.userUID).subscribe(dataLastEmittedFromObserver => {
      this.databaseUser = dataLastEmittedFromObserver[0];)
    });
  }
