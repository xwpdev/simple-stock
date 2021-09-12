export interface StockItem {
    shortName: string;
    symbol: string;
    regularMarketPrice: number;
    regularMarketDayHigh: number;
    regularMarketDayLow: number;
    regularMarketChange: number;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    isEnabled: boolean;
}