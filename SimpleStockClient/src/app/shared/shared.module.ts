import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StockItemPanelComponent } from './components/stock-item-panel/stock-item-panel.component';
import { StockListComponent } from './components/stock-list/stock-list.component';

@NgModule({
  declarations: [
    StockItemPanelComponent,
    StockListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    StockItemPanelComponent,
    StockListComponent
  ]
})
export class SharedModule { }
