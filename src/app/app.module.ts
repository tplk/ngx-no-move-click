import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoMoveClickModule } from 'no-move-click';

import { AppComponent } from './app.component';
import { ClickNotifierComponent } from './click-notifier/click-notifier.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickNotifierComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoMoveClickModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
