import { Component, Input, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/core/services/finance.service';

@Component({
  selector: 'app-stock-item-panel',
  templateUrl: './stock-item-panel.component.html',
  styleUrls: ['./stock-item-panel.component.scss']
})
export class StockItemPanelComponent implements OnInit {
  @Input() stockSymbol: string = '';

  constructor(private financeService: FinanceService) { }

  ngOnInit(): void {
    // fetch stock data
    this.financeService.get(this.stockSymbol).subscribe(res => {
      console.log(res);
    }, error => { });
  }

}
