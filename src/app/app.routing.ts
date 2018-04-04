import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FundListComponent } from './fund-list/fund-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'fund',
    component: FundListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
