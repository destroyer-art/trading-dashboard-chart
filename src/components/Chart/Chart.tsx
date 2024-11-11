import React, { useEffect, useRef } from 'react';
import { createChart, IChartApi, ISeriesApi, Time, ColorType } from 'lightweight-charts';
import { CandlestickData, TooltipData } from '../../types/types';
import { format } from 'date-fns';
import { ChartContainer } from './styles';

interface ChartProps {
    data: CandlestickData<Time>[];
    onLoadMore: () => void;
    onTooltipUpdate: (data: TooltipData | null) => void;
}

const Chart: React.FC<ChartProps> = ({ data, onLoadMore, onTooltipUpdate }) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 500,
            layout: {
                background: { type: ColorType.Solid, color: '#1E222D' },
                textColor: '#DDD',
            },
            grid: {
                vertLines: { color: '#2B2B43' },
                horzLines: { color: '#2B2B43' },
            },
            crosshair: {
                mode: 0,
            },
            timeScale: {
                timeVisible: true,
                secondsVisible: false,
            },
        });

        const candlestickSeries = chart.addCandlestickSeries();
        seriesRef.current = candlestickSeries;
        chartRef.current = chart;

        chart.subscribeCrosshairMove((param) => {
            if (param.time) {
                const data = param.seriesData.get(candlestickSeries) as CandlestickData<Time>;
                if (data) {
                    onTooltipUpdate({
                        time: format(new Date(Number(data.time) * 1000), 'yyyy-MM-dd HH:mm'),
                        open: data.open,
                        high: data.high,
                        low: data.low,
                        close: data.close,
                    });
                }
            } else {
                onTooltipUpdate(null);
            }
        });

        chart.timeScale().subscribeVisibleTimeRangeChange(() => {
            const logicalRange = chart.timeScale().getVisibleLogicalRange();
            if (logicalRange && logicalRange.from <= 5) {
                onLoadMore();
            }
        });

        return () => {
            chart.remove();
        };
    }, [onLoadMore, onTooltipUpdate]);

    useEffect(() => {
        if (seriesRef.current) {
            seriesRef.current.setData(data);
        }
    }, [data]);

    return <ChartContainer ref={chartContainerRef} />;
};

export default Chart; 