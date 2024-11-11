import styled from 'styled-components';

export const TooltipContainer = styled.div`
    position: fixed;
    padding: ${({ theme }) => theme.spacing.small};
    background: ${({ theme }) => theme.colors.background}ee;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 12px;
    z-index: 100;
    pointer-events: none;
`;

export const TooltipRow = styled.div`
    margin: 2px 0;
`; 