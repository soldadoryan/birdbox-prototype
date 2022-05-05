import React from 'react';
import * as S from './styles';
import { RiSearch2Line, RiPlayFill, RiCheckDoubleFill } from 'react-icons/ri';
import formatDate from '../../utils/formatDate';
import Blockchain from '../../assets/blockchain.png';

function ItemRecording({ data, setPage }) {

    const playAudio = () => {
        data.audio.play();
    }

    return (
        <S.Container>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.4044667458364!2d-43.944839470786505!3d-19.982566599160904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697ff926dc7e5%3A0x482a669c0db44315!2sR.%20das%20Ac%C3%A1cias%2C%201357-1255%20-%20Vila%20Das%20Flores%2C%20Nova%20Lima%20-%20MG%2C%2034000-000!5e0!3m2!1spt-BR!2sbr!4v1650505594664!5m2!1spt-BR!2sbr"
                width="100%"
                height="60"
                loading="lazy"></iframe>
            <S.Infos>
                <S.Stamps>
                    <S.Stamp onClick={() => alert('The recording is stored on our secure network.')} title="The recording is stored on our secure network.">
                        <img src={Blockchain} />
                    </S.Stamp>
                    <S.Stamp onClick={() => alert('The recording has been received by your emergency contact.')} title="The recording has been received by your emergency contact.">
                        <RiCheckDoubleFill />
                    </S.Stamp>
                </S.Stamps>
                <S.WrapInfos>
                    <S.Title>{data.title}</S.Title>
                    <S.InfoTitle>{formatDate(data.date)}</S.InfoTitle>
                    <S.Description>{data.description}</S.Description>
                </S.WrapInfos>
                <S.WrapButtons>
                    <S.RecordingDetails onClick={() => setPage('redirect')}>
                        <RiSearch2Line /> More details
                    </S.RecordingDetails>
                    <S.RecordingDetails onClick={playAudio}>
                        <RiPlayFill />
                        Listen to recording
                    </S.RecordingDetails>
                </S.WrapButtons>
            </S.Infos>
        </S.Container>
    );
}

export default ItemRecording;