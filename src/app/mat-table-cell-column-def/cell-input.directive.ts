import { Directive, EventEmitter, HostListener, Inject, Input, Output } from '@angular/core';
import { MatColumnDef } from "@angular/material/table";

@Directive({
  selector: '[appCellInput]'
})
export class CellInputDirective {

  @Input()
  get appCellInput(): number {
    return this._rowIndex;
  }
  set appCellInput(rowIndex: number) {
    this._rowIndex = rowIndex;
  }
  private _rowIndex!: number;

  @Output() columnPaste = new EventEmitter<{rowIndex: number, columnDefName: string}>();

  constructor(@Inject('MAT_SORT_HEADER_COLUMN_DEF') private matColumnDef: MatColumnDef) {}

  @HostListener('paste')
  onPaste() {
    this.columnPaste.emit({rowIndex: this._rowIndex, columnDefName: this.matColumnDef.name});
  }

}
