import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { FinanceService } from 'src/app/core/services/finance.service';
import { StockItem } from '../../models/stock-item';

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
    // fetch stock data
    this.loadData();

    // mock realtime updates using a timer
    // currently set to 30s to avoid API limit exceed
    const timer = interval(30000);
    timer.subscribe(() => {
      if (this.stock && this.stock.isEnabled) {
        this.loadData();
      }
    });
  }

  loadData(): void {
    this.financeService.get(this.stockSymbol).subscribe(res => {
      this.stock = res['optionChain']['result'][0]['quote'];

      // set stock to updated ON by defaultÍ
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
