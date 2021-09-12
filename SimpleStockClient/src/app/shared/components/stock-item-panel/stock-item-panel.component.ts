import { Component, Input, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/core/services/finance.service';
import { StockItem } from '../../models/stock-item';

import * as signalR from '@microsoft/signalr';
import { ApiConstants } from 'src/app/core/constants/api.constants';

@Component({
  selector: 'app-stock-item-panel',
  templateUrl: './stock-item-panel.component.html',
  styleUrls: ['./stock-item-panel.component.scss']
})
export class StockItemPanelComponent implements OnInit {
  @Input() stockSymbol: string = '';

  stock!: StockItem;
  priceIncreased!: boolean;

  constructor(private financeService: FinanceService) { }

  ngOnInit(): void {
    // Initial fetch stock data
    this.loadData();

    /**
     * Mock realtime updates using a timer
     * Currently set to 30s to avoid API limit exceed
     * Commented out as sync with SignalR is enabled
     */
    // const timer = interval(30000);
    // timer.subscribe(() => {
    //   if (this.stock && this.stock.isEnabled) {
    //     this.loadData();
    //   }
    // });

    const connection = new signalR.HubConnectionBuilder()
      .withUrl(`${ApiConstants.WEBAPI_LINK}/notify`)
      .build();

    connection.start().then(function () {
      // SignalR is connected
    }).catch(function (err) {
      return console.error(err.toString());
    });

    connection.on("BroadcastMessage", (msg) => {
      // Load only the symbol pushed from the API
      if (msg === this.stock?.symbol) {
        if (this.stock.isEnabled) {
          this.loadData();
        }
      }
    });
  }

  loadData(): void {
    this.financeService.get(this.stockSymbol).subscribe(res => {
      this.stock = res['optionChain']['result'][0]['quote'];

      // Set stock to updated ON by defaultÍ
      this.stock.isEnabled = true;

      this.priceIncreased = (this.stock?.regularMarketChange >= 0);
    }, error => {
      console.log('loadData: ', error);
    });
  }

  toggleEnable(): void {
    this.stock.isEnabled = !this.stock.isEnabled
  }
}
