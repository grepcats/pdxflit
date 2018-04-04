import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FundListComponent } from './fund-list/fund-list.component';
import { FundDetailsComponent } from './fund-details/fund-details.component'

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'fund',
    component: FundListComponent
  },
  {
    path: 'fund/:id',
    component: FundDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
