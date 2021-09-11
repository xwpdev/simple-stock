import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockItemPanelComponent } from './components/stock-item-panel/stock-item-panel.component';
import { StockItemListComponent } from './components/stock-item-list/stock-item-list.component';



@NgModule({
  declarations: [
    StockItemPanelComponent,
    StockItemListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StockItemPanelComponent,
    StockItemListComponent
  ]
})
export class SharedModule { }
