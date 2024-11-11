import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        background: '#ffffff',
        cardBackground: '#f5f5f5',
        text: '#333333',
        textSecondary: '#666666',
        border: '#e0e0e0',
        chartGrid: '#dddddd',
    },
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
    },
    borderRadius: '4px',
};

export type Theme = typeof theme; 