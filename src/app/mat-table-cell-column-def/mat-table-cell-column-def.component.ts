import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-mat-table-cell-column-def',
  templateUrl: './mat-table-cell-column-def.component.html',
  styleUrls: ['./mat-table-cell-column-def.component.css']
})
export class MatTableCellColumnDefComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  onColumnPaste(event: { rowIndex: number; columnDefName: string }) {
    navigator.clipboard.readText()
      .then(content => {
        this._hanldeColumnPaste(event.rowIndex, event.columnDefName, content);
      })
      .catch(console.error);
  }

  _hanldeColumnPaste(rowIndex: number, attributePath: string, content: string) {
    const newContents = content.split('\n');

    ELEMENT_DATA.forEach( (elm, index) => {
      if (index >= rowIndex && index < (rowIndex + newContents.length)) {
        // @ts-ignore
        if (elm[attributePath]) {
          // @ts-ignore
          elm[attributePath] = newContents[index - rowIndex];
        }
      }
    });

    this.dataSource = ELEMENT_DATA;
  }
}
