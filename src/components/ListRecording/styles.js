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
        position: relative;
        overflow: hidden;
    `}
`;

export const Body = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    &.empty { justify-content: center; }
`;

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.text.light};
        font-size: 14px;
        width: calc(100% - 40px);
        margin: 25px 0;
    `}
`;

export const Description = styled.h2`
    ${({ theme }) => css`
        color: ${theme.colors.text.dark};
        font-size: 16px;
        width: calc(100% - 40px);
        margin: 25px 0;
        text-align: center;
    `}
`;