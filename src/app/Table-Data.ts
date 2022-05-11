import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import  { DatabaseService} from './services/database.service'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',type: ""},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',type: ""},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',type: ""},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',type: ""},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',type: ":"},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',type: ":"},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',type: ":"},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',type: ":"},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',type: ":"},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',type: ":"},
];

/**
 * @title Table with selection
 */
@Component({
  selector: 'Table-Data',
  styleUrls: ['Table-Data.css'],
  templateUrl: 'Table-Data.html',
})
export class TableData {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol','type'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */