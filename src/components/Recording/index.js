import React from 'react';
import * as S from './styles';
import Header from '../Header';

function Recording() {
    return (
        <S.Container>
            <Header />
            <S.Body>
                <S.RecButton>
                    Start Recording...
                </S.RecButton>
                <S.DescriptionButton>
                    You can choose a passphrase to start recording in "Settings".
                </S.DescriptionButton>
            </S.Body>
        </S.Container>
    );
}

export default Recording;