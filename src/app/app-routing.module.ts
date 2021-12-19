import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './StudentComponents/edit/edit.component';
import { ExtraActivityComponent } from './StudentComponents/extra-activity/extra-activity.component';
import { StudentHomeComponent } from './StudentComponents/student-home/student-home.component';

const routes: Routes = [
  {path: 'home', component: StudentHomeComponent},
  {path: 'edit/:id',component: EditComponent},
  {path: 'extraAct', component: ExtraActivityComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
