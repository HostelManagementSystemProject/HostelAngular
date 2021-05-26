import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { routes } from './admin-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class AdminModule { }
