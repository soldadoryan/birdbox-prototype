import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: rgba(0, 0, 0, 0.3);
        border: 1px solid ${theme.colors.shape.dark};
        width: 40px;
        height: 20px;
        padding: 2px;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 10px;
        cursor: pointer;

        &.active {
            justify-content: flex-end;

            & > div {
                background-color: ${theme.colors.primary};
            }
        }
    `}
`;

export const Indicator = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.shape.light};
        width: 16px;
        height: 15px;
        border-radius: 50%;
        transition: all .5s;
    `}
`;