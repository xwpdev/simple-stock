import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from '../constants/api.constants';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  constructor(private httpSerivce: HttpService) { }

  /**
   * GET Request to fetch data by symbol
   * @param symbol Stock Symbol
   * @returns 
   */
  get(symbol: string): Observable<any> {
    return this.httpSerivce.get(`${ApiConstants.API_LINK}/${symbol}`);
  }
}
