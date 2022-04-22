import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

const enterMenu = keyframes`
  from { left: -85%; }
  to { left: 0; }
`;

const exitMenu = keyframes`
  from { left: 0; }
  to { left: -85%; }
`;

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${darken(0.1, theme.colors.bg.primary)};
        position: absolute;
        top: 0;
        left: -85%;
        width: 85%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 25px;
        z-index: 1050;

        &.enterMenu { animation: ${enterMenu} .2s linear; animation-fill-mode: forwards; }
        &.exitMenu { animation: ${exitMenu} .2s linear; animation-fill-mode: forwards; }
    `};
`;

export const Logo = styled.img`
    width: 80px;
`;

export const MenuList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 50px;
`;

export const MenuItem = styled.li`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        cursor: pointer;
        
        svg {
            color: ${theme.colors.primary};
            margin-right: 10px;
            font-size: 20px;
        }
        
        span {
            color: ${theme.colors.text.light};
            font-size: 14px;
        }
    `}
`;

export const CloseMenu = styled.button`
    ${({ theme }) => css`
        background-color: transparent;
        border: 0;
        color: ${theme.colors.text.light};
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 25px;
        padding: 0;
    `}
`;