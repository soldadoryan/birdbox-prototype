import React from 'react';
import Header from '../Header';
import * as S from './styles';

function Erro404({ setPage }) {
    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body>
                <S.Title>Coming Soon</S.Title>
                <S.Subtitle>Settings page under development</S.Subtitle>
            </S.Body>
        </S.Container>
    );
}

export default Erro404;