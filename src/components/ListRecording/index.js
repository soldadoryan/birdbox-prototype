import React, { useContext } from 'react';
import * as S from './styles';
import Header from '../Header';
import ItemRecording from '../ItemRecording';
import RecordingsContext from '../../contexts/recordings';

function ListRecording({ setPage }) {
    const { recordings } = useContext(RecordingsContext);

    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body className={recordings.length === 0 ? 'empty' : ''}>
                {recordings.length > 0 && (
                    <>
                        <S.Title>My Recordings</S.Title>
                        {recordings.map(item => <ItemRecording data={item} />)}
                    </>
                )}
                {recordings.length === 0 && (
                    <S.Description>Recordings not found!</S.Description>
                )}
            </S.Body>
        </S.Container>
    );
}

export default ListRecording;