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
    ${({ theme }) => css`
        width: 100%;
        height: calc(100% - 70px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`;

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.text.light};
        font-size: 14px;
        width: calc(100% - 40px);
        margin: 25px 0 0;
        text-align: center;
    `}
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.shape.light};
        color: ${theme.colors.text.light};
        width: 80%;
        height: 30px;
        padding: 0 10px;
        margin: 10px 0;
        font-size: 12px;
        background-color: transparent;
        border-radius: 5px;
        margin-top: 20px;
        margin-bottom: 30px;
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

export const WrapToggle = styled.div`
    ${({ theme }) => css`
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
    `}
`;

export const SpanToggle = styled.span`
    ${({ theme }) => css`
        color: ${theme.colors.text.light};
        font-size: 12px;
        margin-left: 10px;
    `}
`;