import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEspecialistasComponent } from './cadastrar-especialistas/cadastrar-especialistas.component';
import { ListarEspecialistasComponent } from './listar-especialistas/listar-especialistas.component';

const routes: Routes = [
{ path: 'especialistas-form', component:  CadastrarEspecialistasComponent},
{ path: 'especialistas-form/:id', component:  CadastrarEspecialistasComponent},
{ path: 'especialistas-listar', component: ListarEspecialistasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialistasRoutingModule { }