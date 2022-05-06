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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5278799.230541129!2d-102.26246073339594!3d39.80189190602648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sEstados%20Unidos!5e0!3m2!1spt-BR!2sbr!4v1651844360669!5m2!1sen!2sbr" width="100%" height="60"></iframe>
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