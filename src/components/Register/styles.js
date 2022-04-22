import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.bg.primary};
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    `}
`;

export const Logo = styled.img`
    ${({ theme }) => css`
        width: 150px;
        margin-bottom: 25px;
    `}
`;

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.text.light};
        font-size: 14px;
        width: 80%;
        margin: 25px 0 10px;
    `}
`;

export const Input = styled.input`
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.shape.light};
        color: ${theme.colors.text.light};
        width: 80%;
        height: 30px;
        padding: 0 10px;
        margin: 10px 0;
        background-color: transparent;
        border-radius: 5px;
        font-size: 12px;
    `}
`;

export const Button = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.colors.primary};
        border: 0;
        font-size: 14px;
        font-weight: bold;
        color: ${theme.colors.shape.dark};
        width: 80%;
        height: 30px;
        margin: 10px 0;
        border-radius: 5px;
    `}
`;

export const LinkRegister = styled.button`
    ${({ theme }) => css`
        background-color: transparent;
        border: 0;
        color: ${theme.colors.text.light};
        font-size: 12px;
    `}
`;