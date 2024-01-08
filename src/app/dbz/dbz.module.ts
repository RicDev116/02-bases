import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterFormComponent } from './components/add-character-form/add-character-form.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterFormComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DbzModule { }
