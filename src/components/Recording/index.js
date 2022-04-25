import React, { useContext, useState } from 'react';
import * as S from './styles';
import Header from '../Header';
import ReactStopwatch from 'react-stopwatch';
import RecordingsContext from '../../contexts/recordings';
import MicRecorder from 'mic-recorder-to-mp3';


function Recording({ setPage }) {
    const [method, setMethod] = useState('stopped');
    const { recordings, setRecordings } = useContext(RecordingsContext);
    const Recorder = new MicRecorder({
        bitRate: 128
    });

    const start = () => {
        Recorder.start();
        // setMethod('started');
    }

    const stop = () => {
        Recorder
            .stop()
            .getMp3().then(([buffer, blob]) => {
                // do what ever you want with buffer and blob
                // Example: Create a mp3 file and play

                console.log(URL.createObjectURL(blob))
                const file = new File(buffer, 'me-at-thevoice.mp3', {
                    type: blob.type,
                    lastModified: Date.now()
                });

                const player = new Audio(URL.createObjectURL(file));
                console.log(player);
                player.play();

            }).catch((e) => {
                alert('We could not retrieve your message');
                console.log(e);
            });
    }

    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body>
                <S.RecButton method={method} onClick={method === 'stopped' ? start : stop}>
                    {method === 'stopped' ? (
                        <>
                            Start <br /> recording
                        </>
                    ) : (<ReactStopwatch
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