import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentHomeComponent } from './StudentComponents/student-home/student-home.component';
import { EditComponent } from './StudentComponents/edit/edit.component';
import { ExtraActivityComponent } from './StudentComponents/extra-activity/extra-activity.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StudentHomeComponent,
    EditComponent,
    ExtraActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
