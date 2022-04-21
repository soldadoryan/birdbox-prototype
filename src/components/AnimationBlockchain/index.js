import React, { useEffect } from 'react';
import Header from '../Header';
import * as S from './styles';

function AnimationBlockchain({ setPage }) {
    useEffect(() => {
        window.setTimeout(() => {
            setPage('listRecording');
        }, 3000);
    }, []);

    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body>
                <S.Icon />
                <S.Title>Uploading your recording to our secure data network...</S.Title>
            </S.Body>
        </S.Container>
    );
}

export default AnimationBlockchain;