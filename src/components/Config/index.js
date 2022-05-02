import React, { useState } from 'react';
import Accordion from '../Accordion';
import Header from '../Header';
import Toggle from '../Toggle';
import * as S from './styles';
import Gesture from '../../assets/gesture.png';
import Voice from '../../assets/voice.png';
import Button from '../../assets/button.png';
import Wearable from '../../assets/wearable.png';

function Config({ setPage }) {
    const [showEmergencyContact, setShowEmergencyContact] = useState(false);
    const [silentRecording, setSilentRecording] = useState(false);
    const [whatsappMessage, setWhatsappMessage] = useState(false);

    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body>
                <S.Form>
                    <S.Title>
                        Write a sentence that, when pronounced, will trigger the recorder:
                    </S.Title>
                    <S.Input placeholder='Example: Good Morning' />
                    <br />
                    <S.WrapToggle>
                        <Toggle actived={silentRecording} change={setSilentRecording} />
                        <S.SpanToggle>
                            Enable silent recording
                        </S.SpanToggle>
                    </S.WrapToggle>
                    <Accordion isOpen={silentRecording}>
                        <S.WrapActions>
                            <S.ActionButton type="button">
                                <img src={Gesture} />
                            </S.ActionButton>
                            <S.ActionButton type="button">
                                <img src={Voice} />
                            </S.ActionButton>
                            <S.ActionButton type="button">
                                <img src={Button} />
                            </S.ActionButton>
                            <S.ActionButton type="button">
                                <img src={Wearable} />
                            </S.ActionButton>
                        </S.WrapActions>
                    </Accordion>
                    <S.WrapToggle>
                        <Toggle actived={whatsappMessage} change={setWhatsappMessage} />
                        <S.SpanToggle>
                            Send recording by WhatsApp
                        </S.SpanToggle>
                    </S.WrapToggle>
                    <S.WrapToggle>
                        <Toggle actived={showEmergencyContact} change={setShowEmergencyContact} />
                        <S.SpanToggle>
                            Emergencial contact
                        </S.SpanToggle>
                    </S.WrapToggle>
                    <Accordion isOpen={showEmergencyContact}>
                        <S.Input placeholder='Full name' />
                        <S.Input placeholder='Emergency contact phone' />
                    </Accordion>
                    <S.Button type="button">
                        Save
                    </S.Button>
                </S.Form>
            </S.Body>
        </S.Container>
    );
}

export default Config;