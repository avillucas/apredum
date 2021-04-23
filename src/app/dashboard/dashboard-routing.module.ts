import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children:[
      {
        path: 'colores',
        loadChildren: () => import('../colores/colores.module').then( m => m.ColoresPageModule),
       
      },
      {
        path: 'numeros',
        loadChildren: () => import('../numeros/numeros.module').then( m => m.NumerosPageModule),
        
      },
      {
        path: 'animales',
        loadChildren: () => import('../animales/animales.module').then( m => m.AnimalesPageModule),       
      },
      {
        path: '',
        redirectTo: '/dashboard/colores',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/colores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
