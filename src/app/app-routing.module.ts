import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LaboratoryComponent } from './laboratory/laboratory.component';
import { DevelopmentComponent } from './development/development.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'laboratory', component: LaboratoryComponent },
      { path: '', redirectTo: 'laboratory', pathMatch: 'full' },
      { path: 'laboratory/:isCV', component: LaboratoryComponent },
      { path: 'development', component: DevelopmentComponent },
      { path: 'development/:isCV', component: DevelopmentComponent},
      { path: '**', redirectTo: 'laboratory', pathMatch: 'full' }
    ])
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
