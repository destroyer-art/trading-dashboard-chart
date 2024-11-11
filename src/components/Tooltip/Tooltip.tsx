import React from 'react';
import { TooltipData } from '../../types/types';
import { TooltipContainer, TooltipRow } from './styles';

interface TooltipProps {
    data: TooltipData | null;
}

const Tooltip: React.FC<TooltipProps> = ({ data }) => {
    if (!data) return null;

    return (
        <TooltipContainer>
            <TooltipRow>Time: {data.time}</TooltipRow>
            <TooltipRow>Open: {data.open.toFixed(2)}</TooltipRow>
            <TooltipRow>High: {data.high.toFixed(2)}</TooltipRow>
            <TooltipRow>Low: {data.low.toFixed(2)}</TooltipRow>
            <TooltipRow>Close: {data.close.toFixed(2)}</TooltipRow>
        </TooltipContainer>
    );
};

export default Tooltip; 