import React from 'react';
import { ThemeProvider } from 'styled-components';
import Global from '../../styles/global';
import theme from '../../styles/theme';

function Structure({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Global />
            {children}
        </ThemeProvider>
    );
}

export default Structure;