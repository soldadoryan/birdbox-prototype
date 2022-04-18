import React from 'react';
import * as S from './styles';
import Header from '../Header';
import ItemRecording from '../ItemRecording';

function ListRecording() {
    return (
        <S.Container>
            <Header />
            <S.Body>
                <S.Title>My Recordings</S.Title>
                <ItemRecording />
                <ItemRecording />
                <ItemRecording />
                <ItemRecording />
            </S.Body>
        </S.Container>
    );
}

export default ListRecording;