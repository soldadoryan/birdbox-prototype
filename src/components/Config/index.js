import React from 'react';
import Header from '../Header';
import Toggle from '../Toggle';
import * as S from './styles';

function Config({ setPage }) {
    return (
        <S.Container>
            <Header setPage={setPage} />
            <S.Body>
                <S.Form>
                    <S.Title>
                        Write a sentence that, when pronounced, will trigger the recorder:
                    </S.Title>
                    <S.Input placeholder='Example: Good Morning' />
                    <S.WrapToggle>
                        <Toggle />
                        <S.SpanToggle>
                            Enable silent recording
                        </S.SpanToggle>
                    </S.WrapToggle>
                    <S.WrapToggle>
                        <Toggle />
                        <S.SpanToggle>
                            Send recording by WhatsApp
                        </S.SpanToggle>
                    </S.WrapToggle>
                    <S.WrapToggle>
                        <Toggle />
                        <S.SpanToggle>
                            Enable recording by "Home" button
                        </S.SpanToggle>
                    </S.WrapToggle>
                    <S.Button type="button">
                        Save
                    </S.Button>
                </S.Form>
            </S.Body>
        </S.Container>
    );
}

export default Config;