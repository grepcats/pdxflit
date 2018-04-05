import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MasterFireBase } from './api-keys'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { AuthenticationService } from './authentication.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProfileComponent } from './profile/profile.component';

export const firebaseConfig = {
  apiKey: MasterFireBase.apiKey,
  authDomain:  MasterFireBase.authDomain,
  databaseURL:  MasterFireBase.databaseURL,
  storageBucket:  MasterFireBase.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectListComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectNewComponent,
    DonatePageComponent,
    ProjectEditComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
