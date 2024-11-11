import { Time as LightweightTime } from 'lightweight-charts';

export interface CandlestickData<T = LightweightTime> {
    time: T;
    open: number;
    high: number;
    low: number;
    close: number;
}

export interface TooltipData {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
}

export type Time = number; 