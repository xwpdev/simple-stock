export interface StockItem {
    name: string;
    underlyingSymbol: string;
    regularMarketPrice: number;
    regularMarketDayHigh: number;
    regularMarketDayLow: number;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    isEnabled: boolean;
}