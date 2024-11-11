import { CandlestickData } from '../types/types';

export const generateInitialData = (count: number): CandlestickData[] => {
    const currentTime = Math.floor(Date.now() / 1000);
    const data: CandlestickData[] = [];
    let prevClose = 100 + Math.random() * 50; // Initial base price
    
    for (let i = 0; i < count; i++) {
        const time = currentTime - (count - i) * 60;
        const volatility = 2;
        
        // Use previous close as the open price
        const open = prevClose;
        const close = open + (Math.random() - 0.5) * volatility;
        const high = Math.max(open, close) + Math.random() * volatility;
        const low = Math.min(open, close) - Math.random() * volatility;
        
        data.push({
            time: time as any,
            open,
            high,
            low,
            close,
        });
        
        prevClose = close; // Save close price for next iteration
    }
    
    return data;
};

export const generateNextCandlestick = (lastCandle: CandlestickData): CandlestickData => {
    const volatility = 2;
    const basePrice = lastCandle.close;
    
    return {
        time: (Math.floor(Date.now() / 1000)) as any,
        open: basePrice,
        high: basePrice + Math.random() * volatility,
        low: basePrice - Math.random() * volatility,
        close: basePrice + (Math.random() - 0.5) * volatility,
    };
};

export const generateHistoricalData = (
    firstCandle: CandlestickData,
    count: number
): CandlestickData[] => {
    const data: CandlestickData[] = [];
    let basePrice = firstCandle.open;
    
    for (let i = 0; i < count; i++) {
        const time = (firstCandle.time as number) - (i + 1) * 60;
        const volatility = 2;
        basePrice += (Math.random() - 0.5) * volatility;
        
        data.unshift({
            time: time as any,
            open: basePrice + Math.random() * volatility,
            high: basePrice + Math.random() * volatility + volatility,
            low: basePrice - Math.random() * volatility,
            close: basePrice + Math.random() * volatility,
        });
    }
    
    return data;
}; 