import React, { useState } from 'react';
import * as S from './styles';
import Header from '../Header';

import ReactStopwatch from 'react-stopwatch';

function Recording({ setPage }) {
    const [method, setMethod] = useState('stopped');

    const changeMethodStopwatch = () => {
        if (method === 'stopped') setMethod('started');
        else setPage('registerRecording');
    }

    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body>
                <S.RecButton method={method} onClick={changeMethodStopwatch}>
                    {method === 'stopped' ? 'Start Recording...' : (<ReactStopwatch
                        seconds={0}
                        minutes={0}
                        hours={0}
                        limit="00:10:00"
                        render={({ formatted }) => {
                            return (
                                <S.CounterStopwatch>
                                    {formatted}
                                </S.CounterStopwatch>
                            );
                        }}
                    />)}

                </S.RecButton>
                <S.DescriptionButton>
                    You can choose a passphrase to start recording in "Settings".
                </S.DescriptionButton>
            </S.Body>
        </S.Container>
    );
}

export default Recording;