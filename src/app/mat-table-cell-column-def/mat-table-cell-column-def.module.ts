import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableCellColumnDefComponent } from './mat-table-cell-column-def.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FormsModule } from "@angular/forms";
import { CellInputDirective } from './cell-input.directive';



@NgModule({
  declarations: [
    MatTableCellColumnDefComponent,
    CellInputDirective
  ],
  exports: [
    MatTableCellColumnDefComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule
  ]
})
export class MatTableCellColumnDefModule { }
