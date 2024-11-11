import styled from 'styled-components';

export const ChartContainer = styled.div`
    width: 96.8%;
    height: 500px;
    position: relative;
    background: ${({ theme }) => theme.colors.cardBackground};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: ${({ theme }) => theme.spacing.medium};
`; 