import React, { useEffect } from 'react';
import Header from '../Header';
import * as S from './styles';
import AnimatedLogo from '../../assets/animatedlogo.gif';

function Redirect({ setPage, noblockchain = false }) {

    if (!noblockchain) {
        window.setTimeout(() => {
            window.location = "https://testnets.opensea.io/assets/0x5894b02caf5fd000f921dc062d4e335a6f74ff30/1";
        }, 2000);
    }

    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body>
                {/* <S.Icon /> */}
                <S.Animation src={AnimatedLogo} loop="infinite" />
                <S.Title>You are being redirected to the NFT of your recording.</S.Title>
            </S.Body>
        </S.Container>
    );
}

export default Redirect;