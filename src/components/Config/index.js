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
    const [gesture, setGesture] = useState(false);
    const [voice, setVoice] = useState(false);
    const [touch, setTouch] = useState(true);
    const [wearable, setWearable] = useState(false);

    const toggleMethods = (method) => {
        if (method === 'gesture') {
            if (gesture) alert("Gesture activation successfull deactivated!");
            else alert("Gesture activation successfull activated!");
            setGesture(oldValue => !oldValue);
        } else if (method === 'voice') {
            if (voice) alert("Voice activation successfull deactivated!");
            else alert("Voice activation successfull activated!");
            setVoice(oldValue => !oldValue);
        } else if (method === 'voice') {
            if (voice) alert("Touch activation successfull deactivated!");
            else alert("Touch activation successfull activated!");
            setTouch(oldValue => !oldValue);
        } else {
            if (voice) alert("Wearable activation successfull deactivated!");
            else alert("Wearable activation successfull activated!");
            setWearable(oldValue => !oldValue);
        }
    };

    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body>
                <S.Form>
                    <br />
                    <S.WrapToggle>
                        <Toggle actived={silentRecording} change={setSilentRecording} />
                        <S.SpanToggle>
                            Enable silent recording
                        </S.SpanToggle>
                    </S.WrapToggle>
                    <Accordion isOpen={silentRecording}>
                        <S.WrapActions>
                            <S.ActionButton className={gesture ? 'active' : ''} onClick={() => toggleMethods('gesture')} type="button">
                                <img src={Gesture} />
                            </S.ActionButton>
                            <S.ActionButton className={voice ? 'active' : ''} onClick={() => toggleMethods('voice')} type="button">
                                <img src={Voice} />
                            </S.ActionButton>
                            <S.ActionButton className={touch ? 'active' : ''} onClick={() => toggleMethods('touch')} type="button">
                                <img src={Button} />
                            </S.ActionButton>
                            <S.ActionButton className={wearable ? 'active' : ''} onClick={() => toggleMethods('wearable')} type="button">
                                <img src={Wearable} />
                            </S.ActionButton>
                        </S.WrapActions>
                        {voice && (
                            <>
                                <S.Title>
                                    Write a sentence that, when spoken, will trigger the recording:
                                </S.Title>
                                <S.Input placeholder='Example: Good Morning' />
                            </>
                        )}
                    </Accordion>
                    <S.WrapToggle>
                        <Toggle actived={whatsappMessage} change={setWhatsappMessage} />
                        <S.SpanToggle>
                            Send recording by SMS
                        </S.SpanToggle>
                    </S.WrapToggle>
                    <S.WrapToggle>
                        <Toggle actived={showEmergencyContact} change={setShowEmergencyContact} />
                        <S.SpanToggle>
                            Emergency contact
                        </S.SpanToggle>
                    </S.WrapToggle>
                    <Accordion isOpen={showEmergencyContact}>
                        <S.Input placeholder='Full name' />
                        <S.Input placeholder='Phone number' />
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