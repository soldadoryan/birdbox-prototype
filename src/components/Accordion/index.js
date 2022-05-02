import React from 'react';
import * as S from './styles';

function Accordion({ isOpen, children }) {
    return (
        <>
            {isOpen && (
                <S.Container>{children}</S.Container>
            )}
        </>
    );
}

export default Accordion;