import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.bg.primary};
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 70px;
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
    ${({ theme }) => css`
        background-color: ${theme.colors.primary};
        width: 200px;
        height: 200px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.text.light};
        font-weight: bold;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: 10px solid ${darken(0.06, theme.colors.primary)};
    `}
`;

export const DescriptionButton = styled.p`
    ${({ theme }) => css`
        width: 80%;
        color: ${theme.colors.text.dark};
        font-size: 13px;
        text-align: center;
        margin-top: 25px;
    `}
`;