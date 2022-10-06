import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableCellColumnDefModule } from "./mat-table-cell-column-def/mat-table-cell-column-def.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableCellColumnDefModule
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
