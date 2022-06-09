import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTigreComponent } from './component-tigre/component-tigre.component';
import { ComponentGiaguaroComponent } from './component-giaguaro/component-giaguaro.component';
import { ComponentIguanaComponent } from './component-iguana/component-iguana.component';
import { ComponentBalenaComponent } from './component-balena/component-balena.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTigreComponent,
    ComponentGiaguaroComponent,
    ComponentIguanaComponent,
    ComponentBalenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
