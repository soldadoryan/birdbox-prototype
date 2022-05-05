import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${lighten(0.03, theme.colors.bg.primary)};
        width: calc(100% - 40px);
        border-radius: 5px;
        margin-bottom: 20px;
        cursor: pointer;
        position: relative;

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

export const Title = styled.strong`
    ${({ theme }) => css`
        color: ${theme.colors.text.light};
        font-size: 12px;
        margin: 0 0 10px;
    `}
`;

export const Description = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.text.dark};
        display: flex;
        font-size: 10px;
        margin: 0 0 10px;
    `}
`;

export const InfoTitle = styled.span`
    ${({ theme }) => css`
        font-size: 10px;
        color: ${theme.colors.text.light};
        margin-bottom: 10px;
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

export const Stamps = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    position: absolute;
    top: -10px;
    right: -10px;
`;

export const Stamp = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.shape.dark};
        border: 2px solid ${theme.colors.primary};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        border-radius: 50%;

        img { width: 20px; }
        svg { font-size: 20px; color: ${theme.colors.text.light}}
    `}
`;