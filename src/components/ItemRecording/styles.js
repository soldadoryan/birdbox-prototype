import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${lighten(0.03, theme.colors.bg.primary)};
        width: calc(100% - 40px);
        border-radius: 5px;
        margin-bottom: 10px;
        cursor: pointer;

        &:hover {

        }

        iframe {
            border: 0;
            border-radius: 5px 5px 0 0;
        }
    `}
`;

export const Infos = styled.div`
    ${({ theme }) => css`
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `}
`;

export const WrapInfos = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Description = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.text.dark};
        display: flex;
        font-size: 10px;
        margin-top: 10px;
    `}
`;

export const InfoTitle = styled.span`
    ${({ theme }) => css`
        font-size: 12px;
        color: ${theme.colors.text.light};
    `}
`;

export const RecordingDetails = styled.button`
    ${({ theme }) => css`
        font-size: 12px;
        color: ${theme.colors.primary};
        padding: 10px 5px;
        background-color: ${lighten(0.02, theme.colors.bg.primary)};
        border: 0;
        border-radius: 5px;
        display: flex;
        align-items: center;

        svg {
            margin-right: 5px;
            color: ${theme.colors.text.light};
            font-size: 20px;
        }
    `}
`;
