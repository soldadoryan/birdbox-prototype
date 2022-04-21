import styled, { css } from 'styled-components';

export const Header = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    `}
 `;

export const Logo = styled.img`
    height: 25px;
`;

export const MenuButton = styled.button`
    ${({ theme }) => css`
        color: ${theme.colors.text.light};
        background-color: transparent;
        border: 0;
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`;
