import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustonComponentComponent } from './custon-component/custon-component.component';
import { InterpoletionComponent } from './interpoletion/interpoletion.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { NGTemplateComponentComponent } from './ng-template-component/ng-template-component.component';
import { NgForComponentComponent } from './ng-for-component/ng-for-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExpentionComponent } from './material-expention/material-expention.component';


import { MatButtonModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { IntoractionWhinComponentsComponent } from './intoraction-whin-components/intoraction-whin-components.component';
import { PipingComponent } from './piping/piping.component';
import { MyServiceService } from './my-service.service';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { HTTPcomponentComponent } from './httpcomponent/httpcomponent.component'



@NgModule({
  declarations: [
    AppComponent,
    CustonComponentComponent,
    InterpoletionComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    NGTemplateComponentComponent,
    NgForComponentComponent,
    MaterialExpentionComponent,
    IntoractionWhinComponentsComponent,
    PipingComponent,
    ServiceDetailComponent,
    HTTPcomponentComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
     MatButtonModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
