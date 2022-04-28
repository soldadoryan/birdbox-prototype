import React, { useState } from 'react';
import * as S from './styles';

function Toggle() {
    const [active, setActive] = useState(false);

    return (
        <S.Container onClick={() => setActive(oldValue => !oldValue)} className={active ? 'active' : ''}>
            <S.Indicator />
        </S.Container>
    );
}

export default Toggle;