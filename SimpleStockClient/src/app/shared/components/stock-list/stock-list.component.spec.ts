import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListComponent } from './stock-list.component';

describe('StockItemListComponent', () => {
  let component: StockListComponent;
  let fixture: ComponentFixture<StockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
