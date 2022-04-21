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

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.text.light};
        font-size: 16px;
        width: calc(100% - 40px);
        margin: 25px 0;
    `}
`;


export const DescriptionForm = styled.p`
    ${({ theme }) => css`
        width: 80%;
        color: ${theme.colors.text.dark};
        font-size: 13px;
        text-align: center;
        margin-top: 25px;
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
        height: 40px;
        padding: 0 10px;
        margin: 10px 0;
        background-color: transparent;
        border-radius: 5px;
        margin-top: 20px;
    `}
`;

export const Button = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.colors.primary};
        border: 0;
        font-size: 16px;
        font-weight: bold;
        color: ${theme.colors.shape.dark};
        width: 80%;
        height: 40px;
        margin: 10px 0;
    `}
`;