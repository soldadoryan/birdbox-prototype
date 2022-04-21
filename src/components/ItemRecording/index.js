import React from 'react';
import * as S from './styles';
import { RiSearch2Line } from 'react-icons/ri';
import formatDate from '../../utils/formatDate';

function ItemRecording({ data }) {
    return (
        <S.Container>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.4044667458364!2d-43.944839470786505!3d-19.982566599160904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697ff926dc7e5%3A0x482a669c0db44315!2sR.%20das%20Ac%C3%A1cias%2C%201357-1255%20-%20Vila%20Das%20Flores%2C%20Nova%20Lima%20-%20MG%2C%2034000-000!5e0!3m2!1spt-BR!2sbr!4v1650505594664!5m2!1spt-BR!2sbr"
                width="100%"
                height="75"
                loading="lazy"
            ></iframe>
            <S.Infos>
                <S.WrapInfos>
                    <S.InfoTitle>{formatDate(data.date)}</S.InfoTitle>
                    <S.Description>{data.title}</S.Description>
                </S.WrapInfos>
                <S.RecordingDetails onClick={() => window.open('https://testnets.opensea.io/assets/0x5894b02caf5fd000f921dc062d4e335a6f74ff30/1')}>
                    <RiSearch2Line /> More details
                </S.RecordingDetails>
            </S.Infos>
        </S.Container>
    );
}

export default ItemRecording;