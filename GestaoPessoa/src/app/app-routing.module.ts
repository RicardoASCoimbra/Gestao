import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertComponent } from './gestaoPessoas/insert/insert.component';
import { ListComponent } from './gestaoPessoas/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'criar', component: InsertComponent },
  { path: 'editar/:id', component: InsertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
