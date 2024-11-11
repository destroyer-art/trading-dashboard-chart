import styled from 'styled-components';

export const DashboardContainer = styled.div`
    padding: ${({ theme }) => theme.spacing.large};
    min-height: 100vh;
`;

export const Title = styled.h1`
    margin: 0;
    padding-bottom: ${({ theme }) => theme.spacing.large};
    color: ${({ theme }) => theme.colors.text};
`;

export const ChartWrapper = styled.div`
    background: ${({ theme }) => theme.colors.cardBackground};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: ${({ theme }) => theme.spacing.large};
    margin-top: ${({ theme }) => theme.spacing.large};
`; 