import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableCellColumnDefComponent } from './mat-table-cell-column-def.component';

describe('MatTableCellColumnDefComponent', () => {
  let component: MatTableCellColumnDefComponent;
  let fixture: ComponentFixture<MatTableCellColumnDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableCellColumnDefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTableCellColumnDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
