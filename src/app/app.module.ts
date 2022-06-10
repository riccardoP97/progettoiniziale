import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTigreComponent } from './component-tigre/component-tigre.component';
import { ComponentGiaguaroComponent } from './component-giaguaro/component-giaguaro.component';
import { ComponentIguanaComponent } from './component-iguana/component-iguana.component';
import { ComponentBalenaComponent } from './component-balena/component-balena.component';
import { FormsModule } from '@angular/forms';
import { ComponentErorrComponent } from './component-erorr/component-erorr.component';
import { UserService } from './Service/userService.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ComponentTigreComponent,
    ComponentGiaguaroComponent,
    ComponentIguanaComponent,
    ComponentBalenaComponent,
    ComponentErorrComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
