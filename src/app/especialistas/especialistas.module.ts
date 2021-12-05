import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEspecialistasComponent } from './listar-especialistas/listar-especialistas.component';
import { CadastrarEspecialistasComponent } from './cadastrar-especialistas/cadastrar-especialistas.component';
import { FormsModule } from '@angular/forms';
import{ EspecialistasRoutingModule } from  './especialistas-routing.module';



@NgModule({
  declarations: [
    ListarEspecialistasComponent,
    CadastrarEspecialistasComponent
  ],
  imports: [
    CommonModule,
    EspecialistasRoutingModule,
    FormsModule

  ],
  exports: [
    ListarEspecialistasComponent,
    CadastrarEspecialistasComponent
  ]
})
export class EspecialistasModule { }
