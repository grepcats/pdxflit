import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {
  user;
  constructor(private router: Router, private userService: UserService) { }


  ngOnInit() {
  }
}
