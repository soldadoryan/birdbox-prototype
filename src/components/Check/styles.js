import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primary};
    width: 30px;
    height: 30px;
    border-radius: 3px;
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 30px;
        color: ${theme.colors.primary};
    }
  `}
`;
