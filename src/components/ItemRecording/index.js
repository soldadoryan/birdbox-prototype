import React from 'react';
import * as S from './styles';
import {
    RiPlayFill,
    RiShareFill,
    RiMapPin2Line
} from 'react-icons/ri';

function ItemRecording() {
    return (
        <S.Container>
            <S.Title>Recording 01 <small>04/18/2022 at 18:30</small></S.Title>
            <S.SecurityToken>
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI
            </S.SecurityToken>
            <S.Footer>
                <S.ActionList>
                    <S.ActionItem><RiPlayFill /></S.ActionItem>
                    <S.ActionItem><RiShareFill /></S.ActionItem>
                </S.ActionList>
                <S.Locale>
                    <RiMapPin2Line />
                    <small>Belo Horizonte - MG</small>
                </S.Locale>
            </S.Footer>
        </S.Container>
    );
}

export default ItemRecording;