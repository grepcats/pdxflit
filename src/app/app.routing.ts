import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component'
import { ProjectNewComponent } from './project-new/project-new.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent
  },
  {
    path: 'new',
    component: ProjectNewComponent
  },
  {
    path: 'donate/:id',
    component: DonatePageComponent
  },
  {
    path: 'projects/:id/edit',
    component: ProjectEditComponent
  },
  {
    path: 'profile/:userId',
    component: ProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
