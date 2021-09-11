import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemPanelComponent } from './stock-item-panel.component';

describe('StockItemPanelComponent', () => {
  let component: StockItemPanelComponent;
  let fixture: ComponentFixture<StockItemPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockItemPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
