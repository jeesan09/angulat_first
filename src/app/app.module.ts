import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustonComponentComponent } from './custon-component/custon-component.component';
import { InterpoletionComponent } from './interpoletion/interpoletion.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { NGTemplateComponentComponent } from './ng-template-component/ng-template-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CustonComponentComponent,
    InterpoletionComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    NGTemplateComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
