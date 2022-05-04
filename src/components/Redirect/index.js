import React, { useEffect } from 'react';
import Header from '../Header';
import * as S from './styles';

function Redirect({ setPage }) {
    useEffect(() => {
        window.setTimeout(() => {
            window.location = "https://testnets.opensea.io/assets/0x5894b02caf5fd000f921dc062d4e335a6f74ff30/1"
        }, 3000);
    }, []);

    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body>
                <S.Icon />
                <S.Title>You are being redirected to the NFT of your recording.</S.Title>
            </S.Body>
        </S.Container>
    );
}

export default Redirect;