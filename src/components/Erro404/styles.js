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

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.text.light};
        font-size: 22px;
        margin-bottom: 10px;
    `}
`;

export const Subtitle = styled.h3`
    ${({ theme }) => css`
        color: ${theme.colors.text.dark};
        font-size: 16px;
        font-weight: 400;
    `}
`;