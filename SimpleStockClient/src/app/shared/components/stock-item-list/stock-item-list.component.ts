import { Component, OnInit } from '@angular/core';
import { DataConstants } from 'src/app/core/constants/data.constants';

@Component({
  selector: 'app-stock-item-list',
  templateUrl: './stock-item-list.component.html',
  styleUrls: ['./stock-item-list.component.scss']
})
export class StockItemListComponent implements OnInit {

  subscribedStocks = DataConstants.stocks;

  constructor() { }

  ngOnInit(): void {
  }

}
