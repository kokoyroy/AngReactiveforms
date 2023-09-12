import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TextInoutComponent } from './text-inout/text-inout.component';
import { DynamicTextInputComponent } from './dynamic-text-input/dynamic-text-input.component';


@NgModule({
  declarations: [
    AppComponent,
    TextInoutComponent,
    DynamicTextInputComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
