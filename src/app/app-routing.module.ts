import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './StudentComponents/edit/edit.component';
import { ExtraActivityComponent } from './StudentComponents/extra-activity/extra-activity.component';

const routes: Routes = [
  {path: 'edit/:id',component: EditComponent},
  {path: 'extraAct', component: ExtraActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
