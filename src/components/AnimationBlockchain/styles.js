import styled, { css, keyframes } from 'styled-components';
import { RiRefreshLine } from 'react-icons/ri';

const fullRotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

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

export const Icon = styled(RiRefreshLine)`
    ${({ theme }) => css`
        animation-name: ${fullRotate};
        animation-duration: 2s;
        animation-iteration-count: infinite;
        font-size: 60px;
        color: ${theme.colors.primary};
    `}
`;

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.text.dark};
        font-size: 17px;
        text-align: center;
        margin: 25px 10px 0;
        font-weight: normal;
    `}
`;