import React, { useState } from 'react';
import * as S from './styles';

function Toggle({ actived, change }) {

    return (
        <S.Container onClick={() => change(oldValue => !oldValue)} className={actived ? 'active' : ''}>
            <S.Indicator />
        </S.Container>
    );
}

export default Toggle;