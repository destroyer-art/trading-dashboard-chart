import React, { useState, useEffect, useCallback } from 'react';
import Chart from '../Chart/Chart';
import Tooltip from '../Tooltip/Tooltip';
import { CandlestickData, TooltipData } from '../../types/types';
import { generateInitialData, generateNextCandlestick, generateHistoricalData } from '../../utils';
import { DashboardContainer, Title, ChartWrapper } from './styles';

const Dashboard: React.FC = () => {
    const [data, setData] = useState<CandlestickData[]>(() => generateInitialData(100));
    const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setData(currentData => {
                const newCandle = generateNextCandlestick(currentData[currentData.length - 1]);
                return [...currentData, newCandle];
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleLoadMore = useCallback(() => {
        setData(currentData => {
            const historicalData = generateHistoricalData(currentData[0], 50);
            return [...historicalData, ...currentData];
        });
    }, []);

    return (
        <DashboardContainer>
            <Title>Trading Dashboard</Title>
            <ChartWrapper>
                <Chart 
                    data={data}
                    onLoadMore={handleLoadMore}
                    onTooltipUpdate={setTooltipData}
                />
                <Tooltip data={tooltipData} />
            </ChartWrapper>
        </DashboardContainer>
    );
};

export default Dashboard; 