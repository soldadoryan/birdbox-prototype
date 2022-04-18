import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${lighten(0.03, theme.colors.bg.primary)};
        width: calc(100% - 40px);
        padding: 20px 10px 10px;
        border: 1px solid ${darken(0.2, theme.colors.primary)};
        border-radius: 5px;
        margin-bottom: 10px;
    `}
`;

export const Title = styled.label`
    ${({ theme }) => css`
        color: ${theme.colors.text.light};
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        small {
            color: ${theme.colors.text.dark};
            font-size: 10px;
        }
    `}
`;

export const SecurityToken = styled.div`
    ${({ theme }) => css`
        width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        color: ${theme.colors.primary};
        font-size: 10px;
        padding: 5px;
        margin-top: 10px;
        border-radius: 5px;
        background-color: ${theme.colors.bg.primary};
        letter-spacing: 1px;
    `}
`;

export const ActionList = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 0;
`;

export const ActionItem = styled.button`
    ${({ theme }) => css`
        color: ${theme.colors.primary};
        background-color: transparent;
        border: 0;
        font-size: 20px;
        margin-right: 10px;
    `}
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export const Locale = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        color: ${theme.colors.text.light};
        font-size: 12px;

        svg { color: ${theme.colors.primary}; margin-right: 5px; }
`}
`;