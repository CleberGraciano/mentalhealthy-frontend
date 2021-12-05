import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from '../app/template/template.module';
import { HttpClientModule } from '@angular/common/http';
import { EspecialistasModule } from './especialistas/especialistas.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TemplateModule,
    EspecialistasModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
