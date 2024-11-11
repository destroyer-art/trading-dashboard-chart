import { format } from 'date-fns';

export const formatTimestamp = (timestamp: number): string => {
    return format(new Date(timestamp * 1000), 'yyyy-MM-dd HH:mm');
};

export const getCurrentTimestamp = (): number => {
    return Math.floor(Date.now() / 1000);
}; 