import React from 'react';
import { ThemeProvider } from 'styled-components';
import Global from '../../styles/global';
import theme from '../../styles/theme';
import * as S from './styles'

function Structure({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Global />
            <S.IphoneWrap>
                {children}
                <S.IphoneButton></S.IphoneButton>
            </S.IphoneWrap>
        </ThemeProvider>
    );
}

export default Structure;