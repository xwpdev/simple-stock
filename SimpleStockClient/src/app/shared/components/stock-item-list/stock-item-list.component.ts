import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item-list',
  templateUrl: './stock-item-list.component.html',
  styleUrls: ['./stock-item-list.component.scss']
})
export class StockItemListComponent implements OnInit {

  subscribedStocks = ['AAPL', 'GOOGL', 'MSFT', 'TSLA'];

  constructor() { }

  ngOnInit(): void {
  }

}
