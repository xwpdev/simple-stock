import { Component, OnInit } from '@angular/core';
import { DataConstants } from 'src/app/core/constants/data.constants';

@Component({
  selector: 'app-stock-item-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  subscribedStocks = DataConstants.stocks;

  constructor() { }

  ngOnInit(): void {
  }

}
