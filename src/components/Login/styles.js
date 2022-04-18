import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.bg.primary};
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`;

export const Logo = styled.img`
    ${({ theme }) => css`
        width: 220px;
        margin-bottom: 25px;
    `}
`;

export const Input = styled.input`
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.shape.light};
        color: ${theme.colors.text.light};
        width: 80%;
        height: 40px;
        padding: 0 10px;
        margin: 10px 0;
        background-color: transparent;
        border-radius: 5px;
    `}
`;

export const Button = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.colors.primary};
        border: 0;
        font-size: 16px;
        font-weight: bold;
        color: ${theme.colors.text.dark};
        width: 80%;
        height: 40px;
        margin: 10px 0;
    `}
`;

export const LinkRegister = styled.a`
    ${({ theme }) => css`
        color: ${theme.colors.text.light};
        font-size: 14px;
    `}
`;