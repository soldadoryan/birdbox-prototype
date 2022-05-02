import React from 'react';
import * as S from './styles';
import {
    RiCheckFill
} from 'react-icons/ri';

function Check({ actived }) {
    return (
        <S.Container>
            {actived && (<RiCheckFill />)}
        </S.Container>
    );
}

export default Check;