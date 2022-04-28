import React, { useContext, useState } from 'react';
import * as S from './styles';
import Header from '../Header';

import RecordingsContext from '../../contexts/recordings';

function RegisterRecording({ setPage }) {
    const [title, setTitle] = useState('');
    const { recordings, setRecordings } = useContext(RecordingsContext)

    const handleRegisterRecording = e => {
        e.preventDefault();

        const newRecordings = recordings.map((item, index) => {
            if (recordings.length - 1 === index) return {
                ...item,
                title
            };
            else return item;
        });
        setRecordings(newRecordings);
        setPage('blockchain');
    }

    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body>
                <S.Form onSubmit={handleRegisterRecording}>
                    <S.Title>
                        Write a brief description of the event in question
                    </S.Title>
                    <S.Input placeholder='Recording Description' value={title} onChange={e => setTitle(e.target.value)} />
                    <S.Button type="submit">
                        Register
                    </S.Button>
                </S.Form>
                <S.DescriptionForm>
                    If your recording is interrupted by external factors, we will choose a random title for you..
                </S.DescriptionForm>
            </S.Body>
        </S.Container>
    );
}

export default RegisterRecording;