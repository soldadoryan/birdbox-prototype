import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.bg.primary};
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 70px;
        position: relative;
        overflow: hidden;
    `}
`;

export const Body = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RecButton = styled.div`
    ${({ theme, method }) => css`
        ${method === 'stopped' ? css`
            background-color: ${theme.colors.primary};
            border: 10px solid ${darken(0.06, theme.colors.primary)};
            ` : css`
            background-color: ${theme.colors.recording};
            border: 10px solid ${darken(0.06, theme.colors.recording)};
        `}
        width: 150px;
        height: 150px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.text.light};
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
    `}
`;

export const DescriptionButton = styled.p`
    ${({ theme }) => css`
        width: 80%;
        color: ${theme.colors.text.dark};
        font-size: 13px;
        text-align: center;
        margin: 25px 0;
    `}
`;

export const CounterStopwatch = styled.div`
    ${({ theme }) => css`
        font-size: 20px;
    `}
`;