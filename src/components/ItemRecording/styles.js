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
        flex-direction: column;
        justify-content: space-between;
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
        margin: 10px 0;
    `}
`;

export const InfoTitle = styled.span`
    ${({ theme }) => css`
        font-size: 10px;
        color: ${theme.colors.text.light};
    `}
`;

export const RecordingDetails = styled.button`
    ${({ theme }) => css`
        font-size: 10px;
        color: ${theme.colors.primary};
        padding: 5px;
        height: 100%;
        background-color: ${lighten(0.02, theme.colors.shape.dark)};
        border: 0;
        border-radius: 5px;
        display: flex;
        align-items: center;
        margin: 5px 0;
        flex: 1px;

        svg {
            margin-right: 5px;
            color: ${theme.colors.text.light};
            font-size: 18px;
        }
    `}
`;

export const WrapButtons = styled.div`
    display: flex;
    gap: 5px;
`;