import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'home',
  // },
  // {  path: 'account', redirectTo: 'account' },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'account',
  //       loadChildren: accountModule
  //     }
  //   ]
  // },
  // { path: 'home', redirectTo: 'home' },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: homeModule
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
