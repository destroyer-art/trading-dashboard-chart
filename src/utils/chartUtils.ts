import { IChartApi } from 'lightweight-charts';

export const createChartOptions = (width: number, height: number) => ({
    width,
    height,
    layout: {
        background: { type: 'solid', color: '#1E222D' },
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

export const handleChartResize = (
    chart: IChartApi,
    container: HTMLDivElement
) => {
    const resizeObserver = new ResizeObserver(entries => {
        if (entries.length === 0 || !entries[0].contentRect) return;
        const { width, height } = entries[0].contentRect;
        chart.applyOptions({ width, height });
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
}; 